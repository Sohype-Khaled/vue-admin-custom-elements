<script setup lang="ts">
import {type PropType, ref} from "vue";
import Btn from "@/components/ui/Btn.vue";

const props = defineProps({
  modelValue: {
    type: Array as PropType<File[]>,
    default: () => [],
  },
})


const emit = defineEmits(["update:modelValue"]);
const fileInput = ref<HTMLInputElement | null>(null);
const files = ref<File[]>(props.modelValue || []);

const triggerFileSelect = () => {
  fileInput.value?.click();
};

const addFiles = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target.files) return;

  const selectedFiles = Array.from(target.files);
  files.value.push(...selectedFiles);
  emit("update:modelValue", files.value);
};

/**
 * Add files programmatically
 */
const addFilesExternally = (newFiles: File[]) => {
  files.value.push(...newFiles);
  emit("update:modelValue", files.value);
};

/**
 * Remove a file by index
 */
const removeFile = (index: number) => {
  files.value.splice(index, 1);
  emit("update:modelValue", files.value);
};

/**
 * Reset all files
 */
const resetFiles = () => {
  files.value = [];
  emit("update:modelValue", files.value);
};

// Expose functions to parent
defineExpose({ addFilesExternally, removeFile, resetFiles });


/*// Props
const props = defineProps({
  options: {type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true},
});


const {parsedOptions} = useMediaOptions(ref(props.options));
provide("options", parsedOptions.value);

/!*
 * Define Emits
 *!/
const emit = defineEmits(["change", "fileUploaded"]);

// Reactive state

const files = ref<File[]>([]);
const uploadedFiles = ref<string[]>([]); // ✅ Explicitly type as an array of strings

/!**
 * Methods
 *!/
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
defineExpose({addFiles});*/
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
  </div>
</template>


<style>
@import url("@/style.css");
</style>