import axios from "axios";

import {
  MediaLibraryServiceOptions,
  OnCancel,
  OnComplete,
  OnError,
  OnProgress
} from '@/types/mediaLibrary.ts';
import {ApiService} from "@/services/APIService.ts";
import {useConfirmation} from "@/composables/useConfirmation.ts";

export default class MediaLibraryService {
  private options: MediaLibraryServiceOptions;
  private abortController: AbortController | null = null;
  private mediaId: string | null = null;


  constructor(options: MediaLibraryServiceOptions) {
    this.options = options
  }

  public async startUpload(file: File) {
    return await ApiService.post(`${this.options.baseUrl}/s3/upload/start/`, {
      file_name: file.name,
      mime_type: file.type,
      size: file.size,
      chunk_count: Math.ceil(file.size / this.options.chunkSize),
      ...this.options.target,
      location: this.options.bucket,
      chunk_size: this.options.chunkSize,
      is_private: this.options.isPrivate,
      collection_name: this.options.collectionName
    }, {headers: this.options.auth.headers});
  }

  public chunkFile(file: File): Blob[] {
    const chunks = [];
    for (let i = 0; i < file.size; i += this.options.chunkSize) {
      chunks.push(file.slice(i, i + this.options.chunkSize));
    }
    return chunks;
  }

  public async uploadChunk(url: string, file: Blob, signal: AbortSignal) {
    const response = await ApiService.put(url, file, {signal});
    return JSON.parse(response.headers["etag"]);
  }

  public async uploadFileInChunks(presignedUrls: string[], file: File, onProgress: OnProgress) {
    if (this.abortController) {
      throw new Error("Upload already in progress");
    }

    this.abortController = new AbortController();
    const {signal} = this.abortController;
    const chunks: Blob[] = this.chunkFile(file);
    const completedChunks = [];

    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const url = presignedUrls[i];

      try {
        const ETag = await this.uploadChunk(url, chunk, signal);
        completedChunks.push({ETag, PartNumber: i + 1});
        onProgress(((i + 1) / chunks.length) * 100);
      } catch (error: any) {
        if (axios.isCancel(error)) {
          console.log("Upload canceled");
        } else {
          console.error("Error uploading chunk:", error);
        }
        throw error; // Exit the loop on error
      }
    }

    this.abortController = null; // Reset controller after completion
    return completedChunks;
  }

  public async completeUpload(mediaId: string, data: { parts: Array<{ ETag: string; PartNumber: number }> }) {
    return await ApiService.post(`${this.options.baseUrl}/s3/upload/complete/${mediaId}/`, data,
      {headers: this.options.auth.headers})
  }

  public async cancelUpload(onCancel: OnCancel) {
    if (this.abortController) {
      // Abort the actual file upload request(s).
      this.abortController.abort();
      this.abortController = null;
    }

    // Optionally let the server know we're canceling (if `mediaId` is available).
    if (this.mediaId) {
      try {
        await ApiService.post(
          `${this.options.baseUrl}/s3/upload/cancel/${this.mediaId}/`,
          {},
          {headers: this.options.auth.headers}
        );
      } catch (error) {
        console.error("Error notifying server of cancellation:", error);
      }
    }

    // Call the external onCancel callback, if any.
    onCancel(this.mediaId);
  }

  public async uploadFile(
    file: File,
    onProgress: OnProgress,
    onComplete: OnComplete,
    onError: OnError
  ) {
    let response;
    try {
      response = await this.startUpload(file);
    } catch (error) {
      console.error("Error starting upload:", error);
      onError(error);
      throw error;
    }
    const {presigned_urls, media_id} = response.data;
    this.mediaId = media_id;
    try {
      const completedChunks = await this.uploadFileInChunks(presigned_urls, file, onProgress);
      await this.completeUpload(media_id, {parts: completedChunks});
      onComplete(media_id);
      return {media_id, completedChunks};
    } catch (error) {
      console.error("Upload failed:", error);
      onError(error);

      // Reset mediaId if we fail or complete
      this.mediaId = null;
      throw error;
    }
  }

  static async getTargetMedia(options: MediaLibraryServiceOptions) {
    return await ApiService.get(`${options.baseUrl}/s3/manage/${options.target?.app_label}/${options.target?.model_name}/${options.target?.object_id}/`, {
      headers: options.auth.headers
    });
  }

  static async reorderCollection(options: MediaLibraryServiceOptions, payload: { uuid: string, order: number }[]) {
    return await ApiService.post(`${options.baseUrl}/s3/manage/reorder/`, {
      items: payload
    }, {
      headers: options.auth.headers
    });
  }

  static async deleteCollectionItem(options: MediaLibraryServiceOptions, uuid: string) {
    const confirmDialog = useConfirmation();
    const result = await confirmDialog.confirm({
      message: "Are you sure you want to delete this media item?",
      severity: 'warning'
    });

    if (result) {
      return await ApiService.delete(`${options.baseUrl}/s3/manage/${uuid}/delete/`, {
        headers: options.auth.headers
      })
    } else {
      console.log("User canceled.");
    }
  }
}