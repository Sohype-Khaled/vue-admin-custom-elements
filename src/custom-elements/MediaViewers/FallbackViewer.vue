<script setup lang="ts">
import {LightboxItem} from "@/types/lightbox.ts";
import {PropType} from "vue";

defineProps({
  item: {type: Object as PropType<LightboxItem>, required: true},
});
</script>

<template>
  <div class="text-center text-white">
    <p>Preview not available.</p>
    <a :href="item.downloadUrl" target="_blank" class="text-blue-400 hover:underline">Download file</a>
  </div>
</template>


