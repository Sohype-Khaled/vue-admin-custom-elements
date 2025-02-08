<script setup lang="ts">
import {MediaItem} from "@/types/mediaLibrary.ts";
import {computed, type PropType} from "vue";
import SVGIcon from "@/components/SVGIcon/SVGIcon.vue";
import Lightbox from "@/custom-elements/Lightbox/Lightbox.ce.vue";
import {LightboxItem} from "@/types/lightbox.ts";


const props = defineProps({
  item: {type: Object as PropType<MediaItem>, required: true},
  editable: {type: Boolean, default: false},
  deletable: {type: Boolean, default: false},
  downloadable: {type: Boolean, default: false},
  allowOrdering: {type: Boolean, default: false},
  isLastItem: {type: Boolean, default: false},
})
const emit = defineEmits(["item:delete", "item:edit"]);

const preview = computed<LightboxItem>(() => ({
  url: props.item.urls?.preview,
  downloadUrl: props.item.urls?.download,
  filename: props.item.file_name,
  type: props.item.mime_type,
  caption: props.item?.caption,
  thumbnail: props.item?.urls.thumbnail,
  group: props.item?.collection_name
}));

const size = computed(() => {
  const kb = props.item?.size / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
});

const fileType = computed(() => {
  let type = ''
  if (typeof props.item.file === "string")
    type = props.item?.mime_type as string
  else if (typeof props.item.file === "object")
    type = props.item.file.type
  return type.split("/")[0];
});
</script>

<template>
  <div class="flex items-center justify-start p-2 border-b border-gray-200"
       :class="{ 'border-none': isLastItem }"
  >
    <SVGIcon v-if="allowOrdering"
             icon="burgerMenu"
             class="cursor-move text-gray-400 hover:text-gray-600 handle me-3 w-7 h-7"/>
    <div class="w-14 h-14 me-3">
      <Lightbox :item="preview" class="shrink-0 object-cover rounded-lg bg-gray-100 "
                :downloadable="downloadable"
      />
    </div>
    <div class="flex items-center space-x-3 grow">
      <div>
        <div class="text-sm font-medium text-gray-800" v-text="item.file_name"/>
        <div class="text-xs text-gray-500 uppercase">
          {{ fileType }}<span class="mx-2 text-gray-400">•</span>{{ size }}
        </div>
        <div class="text-xs">
          <template v-if="deletable">
            <button
                @click.prevent="emit('item:delete', item.uuid)"
                class="text-blue-500 hover:underline"
                aria-label="Delete file">
              Delete
            </button>
            <span class="mx-2 text-gray-400" v-if="editable || downloadable">•</span>
          </template>
          <template v-if="editable">
            <button
                @click.prevent="emit('item:edit', item.uuid)"
                class="text-blue-500 hover:underline"
                aria-label="Edit file">
              Edit
            </button>
            <span class="mx-2 text-gray-400" v-if="downloadable">•</span>
          </template>
          <template v-if="downloadable">
            <a v-if="item.urls?.download"
               :href="item.urls?.download"
               target="_blank"
               class="text-blue-500 hover:underline"
               aria-label="Download file">
              Download
            </a>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

