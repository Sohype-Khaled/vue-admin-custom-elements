<script setup lang="ts">
import {type PropType, ref} from "vue";
import type {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import BtnUpload from "@/custom-elements/inputs/BtnUpload/BtnUpload.ce.vue";
import UploadedList from "@/custom-elements/inputs/BtnUpload/UploadedList.ce.vue";

defineProps({
  options: {type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true},
});

const files = ref<File[]>([]);
const uploadedMediaIds = ref<string[]>([]);

</script>

<template>
  <div class="flex flex-col justify-center items-center gap-2 p2 m-5 min-h-[100px] border border-gray-300 rounded-lg">
    <pre>{{uploadedMediaIds}}</pre>
    <BtnUpload v-model="files"/>
    <UploadedList
        v-model="files"
        v-model:mediaIds="uploadedMediaIds"
        :options="options"/>
  </div>
</template>
<style>
@import url("@/style.css");
</style>