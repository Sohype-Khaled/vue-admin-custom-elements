<script setup lang="ts">
import {defineEmits, defineExpose, defineProps, type PropType, ref, watch} from "vue";
import Btn from "@/components/ui/Btn.vue";

const props = defineProps({
  modelValue: {
    type: Array as PropType<File[]>,
    default: () => [],
  },
});

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

// Watch for external updates
watch(
    () => props.modelValue,
    (newVal) => {
      files.value = newVal;
    }
);


// Expose methods for external use
defineExpose({addFilesExternally, resetFiles, removeFile});
</script>

<template>
  <div class="relative w-fit h-fit inline-block">
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