<script setup lang="ts">
import {type PropType, provide, ref} from "vue";
import UploadedFileListItem from '@/custom-elements/inputs/BtnUpload/UploadedFileListItem.vue';
import type {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import {useMediaOptions} from "@/composables/useMediaOptions.ts";
import Btn from "@/components/ui/Btn.vue";

// Props
const props = defineProps({
  teleportTarget: {type: String, default: 'body',},
  options: {type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true},
});


const {parsedOptions} = useMediaOptions(ref(props.options));
provide("options", parsedOptions.value);

/*
 * Define Emits
 */
const emit = defineEmits(["change", "fileUploaded"]);

// Reactive state
const fileInput = ref<HTMLInputElement | null>(null);
const files = ref<File[]>([]);
const uploadedFiles = ref<string[]>([]); // ✅ Explicitly type as an array of strings

/**
 * Methods
 */
const triggerFileSelect = () => ((fileInput.value as HTMLInputElement)?.click());

const handleFileChange = async (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target.files) return;

  const inputFiles = Array.from(target.files);
  inputFiles.map((file) => files.value.push(file))
}

const addFiles = (event: Event) => (handleFileChange(event));


const fileUploaded = (mediaId: string) => {
  if (!uploadedFiles.value.includes(mediaId)) {
    uploadedFiles.value.push(mediaId);
    emit("change", uploadedFiles.value);
  }

  emit("fileUploaded", mediaId);
};


const removeFile = (index: number, mediaId: string) => {
  files.value.splice(index, 1);
  if (uploadedFiles.value.includes(mediaId)) {
    uploadedFiles.value.splice(uploadedFiles.value.indexOf(mediaId), 1);
  }
  emit('change', uploadedFiles.value);
};

// Expose the `addFiles` method to parent components
defineExpose({addFiles});
</script>

<template>
  <div>
    <Btn
        icon="attachment"
        rounded
        text
        severity="secondary"
        @click="triggerFileSelect"
    />
    <input
        ref="fileInput"
        type="file"
        multiple
        @change="addFiles"
        style="display: none"
    />
    <teleport :to="teleportTarget">
      <div>
        <UploadedFileListItem
            v-for="(file, index) in files"
            :key="file.name"
            :file="file"
            @upload:canceled="(mediaId: string) => removeFile(index, mediaId)"
            @upload:complete="(mediaId: string) => fileUploaded( mediaId)"
        />
      </div>
    </teleport>
  </div>
</template>


<style>
@import url("@/style.css");
</style>