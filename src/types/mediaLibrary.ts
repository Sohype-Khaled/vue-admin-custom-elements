export interface RelatedTarget {
    model_name: string;
    app_label: string;
    object_id: number;
}

export interface AuthPayload {
    type: "csrf" | "token" | "hmac";
    headers: any;
}

export interface MediaLibraryServiceOptions {
    bucket: string;
    chunkSize?: number;
    baseUrl: string;
    target?: RelatedTarget;
    auth: AuthPayload;
    collectionName?: string;
    displayName?: string;
    isPrivate?: boolean;
    allowedExtensions?: string;
    singleFile?: boolean;
}

export interface MediaItemUrls {
    download: string;
    preview: string;
    thumbnail?: string;
}

export interface MediaItem {
    file: string | File;
    uuid?: string;
    collection_name?: string;
    file_name?: string;
    mime_type?: string;
    size?: number;
    caption?: string;
    order?: number;
    urls?: MediaItemUrls;
}

export type OnProgress = (progress: number) => void;
export type OnCancel = (mediaId: string) => void;
export type OnComplete = (mediaId: string) => void;
export type OnError = (error: any) => void;



