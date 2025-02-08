<script setup lang="ts">
import {LightboxItem} from "@/types/lightbox.ts";
import {PropType} from "vue";

defineProps({
  item: {type: Object as PropType<LightboxItem>, required: true},
});
</script>

<template>
  <img :src="item.url" class="max-w-full max-h-full object-contain" alt="Image Preview"/>
</template>