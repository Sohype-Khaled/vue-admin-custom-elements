<script setup lang="ts">
import {computed, type PropType, ref, useAttrs, watch} from "vue";
import LightboxOverlay from "./LightboxOverlay.vue";
import {LightboxItem} from "@/types/lightbox.ts";
import MediaPreview from "@/custom-elements/MediaPreview/MediaPreview.ce.vue";
import {useOverlay} from "@/composables/useOverlay.ts";

// Define props
const props = defineProps({
  item: {type: [Object, String] as PropType<LightboxItem | string>, required: true},
  downloadable: {type: Boolean, default: true},
});

const overlay = useOverlay();

// ✅ Parse `item` if it's a JSON string
const parsedItem = computed<LightboxItem>(() => {
  if (typeof props.item === "string") {
    try {
      const parsed = JSON.parse(props.item) as Partial<LightboxItem>;
      return {
        url: parsed.url || "",
        downloadUrl: parsed.downloadUrl || "",
        filename: parsed.filename || "Untitled",
        type: parsed.type || "image",
        caption: parsed.caption || "",
        thumbnail: parsed.thumbnail || "",
        group: parsed.group || "",
      };
    } catch (error) {
      console.error("Invalid JSON format for Lightbox item:", error);
      return {}
    }
  }
  return props.item as LightboxItem;
});

// State
const groupItems = ref<string[]>([]);
const currentIndex = ref(0);

// Use `$attrs` to bind all attributes to the slot
const attrs = useAttrs();

if (!window.lightboxGroups) window.lightboxGroups = {};

// ✅ Register the item in a group (if applicable)
const registerInGroup = () => {
  const group = parsedItem.value.group;
  if (group) {
    if (!window.lightboxGroups[group]) {
      window.lightboxGroups[group] = [];
    }
    if (!window.lightboxGroups[group].includes(parsedItem.value)) {
      window.lightboxGroups[group].push(parsedItem.value);
    }
  }
};

// // ✅ Open Lightbox & Load Group Items
const openLightbox = () => {
  const group = parsedItem.value.group;
  if (group && window.lightboxGroups[group]) {
    groupItems.value = window.lightboxGroups[group];
    currentIndex.value = groupItems.value.indexOf(parsedItem.value);
  }
  overlay.open(LightboxOverlay, {
    props: {
      groupItems: groupItems.value,
      currentIndex: currentIndex.value,
      downloadable: props.downloadable,
    },
    listeners: {
      close: () => {
        overlay.close();
      }
    },
  });
};

// ✅ Watch `parsedItem` to re-register when it changes
watch(parsedItem, registerInGroup, {immediate: true});
</script>

<template>
  <div @click="openLightbox"
       v-bind="attrs"
       class="h-full w-full cursor-pointer rounded-lg hover:opacity-80 transition flex justify-center items-center">
    <slot>
      <MediaPreview :item="parsedItem" v-bind="attrs"/>
    </slot>
  </div>
</template>

<style>
@import url("@/style.css");
</style>
