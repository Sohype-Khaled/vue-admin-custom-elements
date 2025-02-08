<script setup lang="ts">
import Lightbox from "@/custom-elements/Lightbox/Lightbox.ce.vue";
import {computed, PropType} from "vue";
import {LightboxItem} from "@/types/lightbox.ts";

// Define props
const props = defineProps({
  items: {type: [Array, String] as PropType<LightboxItem[] | string>, required: true},
});

const parsedItems = computed<LightboxItem[]>(() => {
  if (typeof props.items === "string") {
    try {
      return JSON.parse(props.items) as LightboxItem[];
    } catch (error) {
      console.error("Invalid JSON format for items:", error);
      return [];
    }
  }
  return props.items;
});
const group = computed(() => props.items[0]?.group || Math.random().toString(36).slice(2));
</script>

<template>
  <div class="grid gap-2 grid-cols-2 my-2.5 w-fit h-fit">
    <!-- Loop through first 3 images -->
    <template v-for="(item, index) in parsedItems.slice(0, 3)" :key="index">
      <Lightbox v-bind="item" :group="group" :item="item">
        <img
            :src="item.thumbnail || item.url"
            :alt="item.filename || 'Image'"
            class="rounded-lg cursor-pointer aspect-square w-20"
        />
      </Lightbox>
    </template>

    <!-- Last Image (Shows "+X" more if there are extra images) -->
    <Lightbox  v-if="parsedItems.length > 4" v-bind="parsedItems[3]" :group="group" :item="parsedItems[3]">
      <div class="relative">
        <button
            class="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center"
        >
          <span class="text-xl font-medium text-white">+{{ parsedItems.length - 3 }}</span>
        </button>
        <img
            :src="parsedItems[3].thumbnail || parsedItems[3].url"
            :alt="parsedItems[3].filename || 'Image'"
            class="rounded-lg cursor-pointer aspect-square w-20"
        />
      </div>
    </Lightbox>
  </div>
</template>

<style>
@import url("@/style.css");
</style>
