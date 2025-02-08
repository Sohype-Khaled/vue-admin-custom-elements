<script setup lang="ts">
import {mimeTypes} from "@/custom-elements/MediaViewers/utils.ts";
import {computed, type PropType} from "vue";
import {LightboxItem} from "@/types/lightbox.ts";
import ImageViewer from "@/custom-elements/MediaViewers/ImageViewer.vue";
import VideoViewer from "@/custom-elements/MediaViewers/VideoViewer.vue";
import FallbackViewer from "@/custom-elements/MediaViewers/FallbackViewer.vue";
import PDFViewer from "@/custom-elements/MediaViewers/PDFViewer.vue";
import AudioViewer from "@/custom-elements/MediaViewers/AudioViewer.vue";

const props = defineProps({
  item: {type: Object as PropType<LightboxItem>, required: true},
});

const componentMap = {
  image: ImageViewer,
  video: VideoViewer,
  audio: AudioViewer,
  document: PDFViewer,
  fallback: FallbackViewer
}

const fileType = computed(() => {
  for (const [type, mimeList] of Object.entries(mimeTypes)) {
    if (mimeList.includes(props.item.type)) return type;
  }
  return "fallback";
});

// ✅ Select the appropriate component dynamically
const SelectedComponent = computed(() => componentMap[fileType.value] || componentMap.fallback);
</script>

<template>
  <component :is="SelectedComponent" :item="item"/>
</template>


