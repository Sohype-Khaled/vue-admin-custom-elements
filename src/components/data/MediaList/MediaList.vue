<script setup lang="ts">
import UploaderFileListItem from "@/components/data/MediaList/MediaListItem.vue";
import {inject, onMounted, type PropType, ref} from "vue";
import MediaLibraryService from "@/services/mediaLibraryService.ts";
import {MediaItem, MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import draggable from "vuedraggable";

const props = defineProps({
  items: {
    type: Array as PropType<MediaItem[]>,
    required: true
  }
})
const emit = defineEmits(["items:loaded", "item:delete"]);

const options = inject<MediaLibraryServiceOptions>("options");
const dragging = ref(false);

const getKey = (item) => {
  if (!item.uploaded) {
    return item.file.lastModified + item.file.name;
  } else {
    return item.uuid;
  }
}

const removeFile = (fileToRemove) => {


}

const add = () => {
  // this.list.push({name: "Juan " + id, id: id++});
}
const replace = () => {
  // this.list = [{name: "Edgard", id: id++}];
}


onMounted(async () => {
  const response = await MediaLibraryService.getTargetMedia(options as MediaLibraryServiceOptions);
  emit("items:loaded", response.data.data.map(i => ({...i, uploaded: true})))
})

</script>

<template>
  <draggable
      :list="items"
      :item-key="getKey"
      ghost-class="ghost"
      handle=".handle"
      :move="checkMove"
      @start="dragging = true"
      @end="dragging = false"
      class="mt-4">
    <template #item="{ element }">
      <UploaderFileListItem
          :item="element"
          @delete="removeFile"/>
    </template>

  </draggable>
</template>

<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.not-draggable {
  cursor: no-drop;
}
</style>