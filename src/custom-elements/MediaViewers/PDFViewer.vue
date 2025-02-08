<script setup lang="ts">
import {LightboxItem} from "@/types/lightbox.ts";
import {PropType} from "vue";

defineProps({
  item: {type: Object as PropType<LightboxItem>, required: true},
});
</script>

<template>
  <embed :src="item.url" :type="item.type" class="h-[70vh] w-[60vw]"/>
</template>

