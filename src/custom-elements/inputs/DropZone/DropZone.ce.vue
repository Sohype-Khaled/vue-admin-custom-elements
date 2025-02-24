<script setup lang="ts">
import {type PropType, provide, ref} from "vue";
import DropzoneItem from "@/custom-elements/inputs/DropZone/DropzoneItem.vue";
import SVGIcon from "@/components/SVGIcon/SVGIcon.vue";
import {useLightbox} from "@/custom-elements/Lightbox/utils.ts";
import type {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import {useMediaOptions} from "@/composables/useMediaOptions.ts";

/**
 * Component Props
 */
const props = defineProps({
  options: {type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true},
  clearOnComplete: {type: Boolean, default: false},
});

/**
 * Reactive Upload Options
 */

const {parsedOptions} = useMediaOptions(ref(props.options));
provide("options", parsedOptions.value);

/*
 * Define Emits
 */
const emit = defineEmits(["change", "fileUploaded"]);
const {lightboxItems, handleFileChange} = useLightbox(parsedOptions.value.collectionName);

/**
 * File Handling States
 */
const fileInput = ref<HTMLInputElement | null>(null);
const isDragging = ref(false);
const files = ref<File[]>([]);

const uploadedFiles = ref<string[]>([]); // ✅ Explicitly type as an array of strings

/**
 * Methods
 */
const triggerFileSelect = () => ((fileInput.value as HTMLInputElement)?.click());

const addFiles = (event: Event) => (handleFileChange(event));

const handleDrop = (event: DragEvent) => {
  event.preventDefault();
  isDragging.value = false;
  if (event.dataTransfer?.files) {
    handleFileChange({ target: { files: event.dataTransfer.files } } as unknown as Event);
  }
};

const fileUploaded = (index: number, mediaId: string) => {
  if (props.clearOnComplete) {
    removeFile(index, mediaId);
  } else {
    if (!uploadedFiles.value.includes(mediaId)) {
      uploadedFiles.value.push(mediaId);
      emit("change", uploadedFiles.value);
    }
  }
  emit("fileUploaded", mediaId);
};

const removeFile = (index: number, mediaId: string) => {
  files.value.splice(index, 1);
  lightboxItems.value.splice(index, 1);

  if (uploadedFiles.value.includes(mediaId)) {
    uploadedFiles.value.splice(uploadedFiles.value.indexOf(mediaId), 1);
  }
  emit('change', uploadedFiles.value);
};
</script>

<template>
  <div
      class="flex flex-col items-center justify-center w-full p-6 mx-auto bg-white border-2 border-dashed rounded-lg shadow-md transition-all duration-300"
      :class="isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'"
      @dragover.prevent="isDragging = true"
      @dragleave="isDragging = false"
      @drop.prevent="handleDrop"
      @click="triggerFileSelect"
      role="button"
      tabindex="0"
      aria-label="Upload files by clicking or dragging them here"
  >
    <h2 class="text-lg font-medium text-gray-700 mb-4">Upload your files</h2>

    <div
        v-if="lightboxItems.length === 0 && !isDragging"
        class="flex flex-col items-center justify-center w-full h-40 cursor-pointer hover:bg-gray-100 rounded-lg"
    >
      <SVGIcon icon="cloudUpload" class="w-12 h-12 mb-2 text-gray-400"/>
      <p class="text-sm text-gray-500">Drag and drop your files here</p>
      <p class="text-xs text-gray-400">(or click to select files)</p>
    </div>

    <div v-else class="w-full flex flex-wrap justify-center items-center gap-2 hover:bg-gray-100 rounded-lg">

      <DropzoneItem
          v-for="(item, index) in lightboxItems"
          :key="item.filename"
          :item="item"
          @click.stop
          @upload:canceled="(mediaId) => removeFile(index, mediaId)"
          @upload:complete="(mediaId) => fileUploaded(index, mediaId)"
      />
    </div>

    <input
        ref="fileInput"
        type="file"
        class="hidden"
        :multiple="!parsedOptions.singleFile"
        :accept="parsedOptions.allowedExtensions"
        @change="addFiles"
    />
  </div>
</template>

<style>
@import url("@/style.css");
</style>