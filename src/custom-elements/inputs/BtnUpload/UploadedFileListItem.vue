<script setup lang="ts">
import Btn from "@/components/ui/Btn.vue";
import {inject, onMounted, type PropType, ref} from "vue";
import type {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import MediaLibraryService from "@/services/mediaLibraryService.ts";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar.vue";

const props = defineProps({
  file: {type: Object as PropType<File>, required: true},
});
const options = inject<MediaLibraryServiceOptions>("options");
const service = new MediaLibraryService(options as MediaLibraryServiceOptions);
const uploaded = ref(false);
const progress = ref(0);


const emit = defineEmits(["upload:canceled", "upload:complete"]);


const cancelUpload = () => (service.cancelUpload((mediaId) => emit("upload:canceled", mediaId)));


onMounted(() => {
  service.uploadFile(
      props.file,
      (progressValue) => (progress.value = progressValue),
      (mediaId) => {
        setTimeout(() => (uploaded.value = true), 2000);
        emit("upload:complete", mediaId);
      },
      () => (emit("upload:canceled", props.file)),
  )
})
</script>

<template>
  <div
      class="flex items-center justify-between p-2 border-b border-gray-200">
    <div class="text-sm font-medium text-gray-800" v-text="file.name"/>
    <div class="flex justify-center items-center ms-auto">
      <div class="w-[100px] pe-1">
        <ProgressBar :progress="progress"/>
      </div>
      <Btn
          icon="close"
          rounded
          size="xs"
          severity="secondary"
          text
          @click="cancelUpload"
      >
      </Btn>
    </div>
  </div>
</template>

<style>
@import url("@/style.css");
</style>