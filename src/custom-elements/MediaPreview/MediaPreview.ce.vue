<script setup lang="ts">
import {computed, type PropType, useAttrs} from "vue";
import type {LightboxItem} from "@/types/lightbox.ts";


import {mimeTypes} from "@/custom-elements/MediaViewers/utils.ts";
import SVGIcon from "@/components/SVGIcon/SVGIcon.vue";

const props = defineProps({
  item: { type: Object as PropType<LightboxItem>, required: true },
  srcAttribute: { type: String as PropType<keyof LightboxItem>, default: "thumbnail" },
});
const attrs = useAttrs();

const fileType = computed(() => {
  for (const [type, mimeList] of Object.entries(mimeTypes)) {
    if (mimeList.includes(props.item?.type)) return type;
  }
  return "unknown";
});
// ✅ Check if it's an icon instead of an image
const isIcon = computed(() => props.item?.thumbnail === "");

// ✅ Compute the source dynamically with type safety
const src = computed(() => props.item[props.srcAttribute] || "");

</script>

<template>
  <!-- Render image if available -->
  <img
      v-if="!isIcon"
      :src="src as string"
      v-bind="attrs"
      :alt="item.filename || 'Media Preview'"
      class="h-full w-full object-cover"
  />

  <!-- Render SVG icon if no valid image -->
  <SVGIcon v-else :icon="fileType" />
</template>

