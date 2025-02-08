<script setup lang="ts">
import {computed, type PropType, useAttrs} from "vue";
import {LightboxItem} from "@/types/lightbox.ts";


import {mimeTypes} from "@/custom-elements/MediaViewers/utils.ts";
import SVGIcon from "@/components/SVGIcon/SVGIcon.vue";

const props = defineProps({
  item: {type: Object as PropType<LightboxItem>, required: true},
  srcAttribute: {type: String, default: "thumbnail"},
});
const attrs = useAttrs();


const fileType = computed(() => {
  for (const [type, mimeList] of Object.entries(mimeTypes)) {
    if (mimeList.includes(props.item?.type)) return type;
  }
  return "unknown";
});

const isIcon = computed(() => (props.item?.thumbnail === ''));


const src = computed(() => props.item?.[props.srcAttribute] || "");


</script>

<template>
  <img :src="src"
       v-bind="attrs"
       :alt="item.filename"
       v-if="!isIcon"
       class="h-full w-full object-cover">
  <SVGIcon :icon="fileType" v-else/>
</template>

