<script setup lang="ts">
import {computed, inject, onMounted, type PropType, ref} from "vue";
import type {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import MediaLibraryService from "@/services/mediaLibraryService.ts";
import Lightbox from "@/custom-elements/Lightbox/Lightbox.ce.vue";
import type {LightboxItem} from "@/types/lightbox.ts";
import Btn from "@/components/ui/Btn.vue";
import ProgressBar from "@/components/ui/ProgressBar/ProgressBar.vue";

const props = defineProps({
  item: {type: Object as PropType<LightboxItem>, required: true},
});

const emit = defineEmits(["upload:canceled", "upload:complete"]);
const options = inject<MediaLibraryServiceOptions>("options");
const service = new MediaLibraryService(options as MediaLibraryServiceOptions);
const uploaded = ref(false);
const progress = ref(0);

const filename = computed(() => props.item.file?.name);
const fileType = computed(() => props.item.file?.type.split('/')[1]);

const cancelUpload = () => (service.cancelUpload((mediaId) => emit("upload:canceled", mediaId)));

onMounted(() => {
  service.uploadFile(
      props.item.file as File,
      (progressValue) => (progress.value = progressValue),
      (mediaId) => {
        setTimeout(() => (uploaded.value = true), 2000);
        emit("upload:complete", mediaId);
      },
      () => (emit("upload:canceled", props.item.file)),
  )
})
</script>

<template>
  <div class="group flex flex-col  p-2  w-36">
    <!-- File Icon -->
    <div class="relative grow mb-2 ">
      <!-- Lightbox -->
      <Lightbox :item="item"
                :downloadable="false"
                :editable="uploaded"
                class="rounded-lg shadow bg-gray-50 aspect-square"/>
      <!-- Overlay (Behind Progress Bar) -->
      <div
          v-if="!uploaded"
          class="absolute inset-0 bg-black bg-opacity-75 rounded-lg"
      ></div>
      <div
          v-if="!uploaded"
          class="absolute top-2/3 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        <ProgressBar :progress="progress"/>
        <div class="text-xs text-white font-semibold mt-1">
          {{ progress.toFixed(0) }}%
        </div>
      </div>
    </div>

    <!-- File Name -->

    <div class="flex justify-between items-center max-w-full">
      <div class="max-w-[83px]">
        <p class="truncate overflow-hidden whitespace-nowrap text-xs font-medium" v-text="filename"/>
        <p class="truncate overflow-hidden whitespace-nowrap text-gray-500 text-xs font-medium uppercase"
           v-text="fileType"/>
      </div>
      <Btn
          @click="cancelUpload"
          rounded
          severity="danger"
          icon="close"
          text
          icon-size="lg"/>
    </div>
  </div>
</template>

