<script setup lang="ts">
import {PropType, ref, watchEffect} from "vue";
import Btn from "@/components/ui/Btn.vue";
import {LightboxItem} from "@/types/lightbox.ts";
import MediaViewer from "@/custom-elements/MediaViewers/MediaViewer.ce.vue";

// Props
const props = defineProps({
  groupItems: {type: Array as PropType<LightboxItem[]>, required: true},
  currentIndex: {type: Number, required: true},
  downloadable: {type: Boolean, default: true},
});
const emit = defineEmits(['close'])
const currentIndex = ref(() => props.currentIndex);


const prevItem = () => (currentIndex.value = (currentIndex.value - 1 + props.groupItems.length) % props.groupItems.length);
const nextItem = () => (currentIndex.value = (currentIndex.value + 1) % props.groupItems.length);
watchEffect(() => currentIndex.value = props.currentIndex);
</script>

<template>
  <!-- Top-left: File name & Counter -->
  <div v-if="groupItems.length > 1" class="absolute top-4 left-4 text-white text-md">
    <p v-if="groupItems[currentIndex].filename"
       class="font-semibold" v-text="groupItems[currentIndex].filename"/>
    <p v-if="groupItems.length > 1"
       class="font-normal">{{ currentIndex + 1 }} / {{ groupItems.length }}</p>
  </div>

  <!-- Close & Download Buttons (Top-right) -->
  <div class="absolute top-4 right-4 flex space-x-2 bg-gray-100 bg-opacity-5 p-2 rounded-full">
    <!-- Download Button -->
    <!--    <Btn as="a"-->
    <!--         v-if="downloadable"-->
    <!--         rounded-->
    <!--          severity="white"-->
    <!--         :href="groupItems[currentIndex].downloadUrl"-->
    <!--         icon="downloadAll"-->
    <!--         title="Download all" target="_blank"/>-->
    <Btn as="a"
         v-if="downloadable"
         rounded
         text
         severity="white"
         :href="groupItems[currentIndex].downloadUrl"
         icon="download"
         title="Download" target="_blank"/>

    <!-- Close Button -->
    <Btn rounded text severity="white" @click="emit('close')" icon="close" title="Close"/>
  </div>


  <!-- Media Preview -->
  <div class="flex flex-col justify-center items-center w-full h-full">
    <MediaViewer :item="groupItems[currentIndex]"/>
  </div>
  <p v-if="groupItems[currentIndex].caption"
     class="absolute bottom-6 text-center text-gray-300 px-4 text-md"
     v-text="groupItems[currentIndex].caption"/>

  <!-- Navigation -->
  <Btn
      v-if="groupItems.length > 1"
      @click="prevItem"
      rounded
      size="lg"
      severity="secondary"
      icon="chevronLeft"
      class="absolute left-6 top-1/2 -translate-y-1/2 bg-opacity-0"
  />
  <Btn
      v-if="groupItems.length > 1"
      @click="nextItem"
      rounded
      size="lg"
      severity="secondary"
      icon="chevronRight"
      class="absolute right-6 top-1/2 -translate-y-1/2 bg-opacity-0"
  />
</template>


