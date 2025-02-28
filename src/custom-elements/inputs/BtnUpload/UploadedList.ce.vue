<script setup lang="ts">
import UploadedFileListItem from "@/custom-elements/inputs/BtnUpload/UploadedFileListItem.vue";
import { type PropType, provide, ref, watch } from "vue";
import type { MediaLibraryServiceOptions } from "@/types/mediaLibrary.ts";
import { useMediaOptions } from "@/composables/useMediaOptions.ts";

// Props
const props = defineProps({
  options: { type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true },
  modelValue: { type: Array as PropType<File[]>, required: true },
  mediaIds: { type: Array as PropType<string[]>, required: true }
});

const emit = defineEmits(["update:modelValue", "update:mediaIds", "file:uploaded", "change"]);

const { parsedOptions } = useMediaOptions(ref(props.options));
provide("options", parsedOptions.value);

// Keep track of uploaded file media IDs
const uploadedFiles = ref<string[]>([...props.mediaIds]);

// Watch for external changes to files (e.g., when files are removed elsewhere)
watch(() => props.modelValue, (newFiles) => {
  if (newFiles.length === 0) {
    uploadedFiles.value = [];
    emit("update:mediaIds", []);
  }
}, { deep: true });

/**
 * Remove file and sync media ID updates
 */
const removeFile = (index: number, mediaId: string) => {
  const updatedFiles = [...props.modelValue];
  updatedFiles.splice(index, 1);

  emit("update:modelValue", updatedFiles);
  emit("change", updatedFiles);

  // Remove from uploadedFiles
  const mediaIndex = uploadedFiles.value.indexOf(mediaId);
  if (mediaIndex !== -1) {
    uploadedFiles.value.splice(mediaIndex, 1);
    emit("update:mediaIds", [...uploadedFiles.value]); // Emit updated media ID list
  }
};

/**
 * Handle successful file upload
 */
const fileUploaded = (mediaId: string) => {
  if (!uploadedFiles.value.includes(mediaId)) {
    uploadedFiles.value.push(mediaId);
    emit("update:mediaIds", [...uploadedFiles.value]); // Emit updated media ID list
  }

  emit("file:uploaded", mediaId);
};
</script>

<template>
  <div class="w-full">
    <UploadedFileListItem
        v-for="(file, index) in modelValue"
        :key="file.name"
        :file="file"
        @upload:canceled="(mediaId: string) => removeFile(index, mediaId)"
        @upload:complete="(mediaId: string) => fileUploaded(mediaId)"
    />
  </div>
</template>

<style>
@import url("@/style.css");
</style>
