<script setup lang="ts">
import {onMounted, type PropType, type Ref, ref, watch} from "vue";
import type {MediaItem, MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import MediaLibraryService from "@/services/mediaLibraryService.ts";
import MediaCollectionItem from "@/custom-elements/MediaCollection/MediaCollectionItem.vue";
import draggable from "vuedraggable";
import {useMediaOptions} from "@/composables/useMediaOptions.ts";


const props = defineProps({
  options: {type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true},
  editable: {type: [Boolean, String], default: false},
  deletable: {type: [Boolean, String], default: false},
  allowOrdering: {type: [Boolean, String], default: false},
  downloadable: {type: [Boolean, String], default: false},
});

const editable = ref(props.editable === true || props.editable === 'true');
const deletable = ref(props.deletable === true || props.deletable === 'true');
const allowOrdering = ref(props.allowOrdering === true || props.allowOrdering === 'true');
const downloadable = ref(props.downloadable === true || props.downloadable === 'true');

const {parsedOptions} = useMediaOptions(ref(props.options));

const items: Ref<MediaItem[]> = ref([]);
const dragging = ref(false);
const isLoading = ref(false); // Add a loading state
const deletingItem = ref<string | null>(null); // Track the item being deleted

/**
 * ✅ Watch for changes in `props.options` to refresh data dynamically
 */
watch(() => props.options, async () => {
  await fetchMediaItems();
});

/**
 * ✅ Fetch media items from API
 */
const fetchMediaItems = async () => {
  try {
    isLoading.value = true;
    const response = await MediaLibraryService.getTargetMedia(parsedOptions.value);
    items.value = response.data.data || [];
  } catch (error) {
    console.error("Error fetching media items:", error);
  } finally {
    isLoading.value = false;
  }
};

/**
 * ✅ Handle reordering logic
 */
const reorderMediaItems = async () => {
  try {
    // ✅ Optimistic UI update (Reorder items in local state first)
    const orderedItems: { uuid: string; order: number }[] = items.value
        .filter((item) => item.uuid !== undefined)
        .map((item, index) => ({
          uuid: item.uuid as string, // Now TypeScript knows it's a string
          order: index,
        }));

    await MediaLibraryService.reorderCollection(parsedOptions.value, orderedItems);
  } catch (error) {
    console.error("Error reordering media items:", error);
  }
};

/**
 * ✅ Delete a media item
 */
const deleteItem = async (uuid: string) => {
  try {
    deletingItem.value = uuid; // Mark item as being deleted
    await MediaLibraryService.deleteCollectionItem(parsedOptions.value, uuid);
    // ✅ Remove the item from the local list
    items.value = items.value.filter(item => item.uuid !== uuid);
  } catch (error) {
    console.error("Error deleting media item:", error);
  } finally {
    deletingItem.value = null; // Remove deletion state after operation
  }
};

/**
 * ✅ Fetch media items on mount
 */
onMounted(() => {
  fetchMediaItems()
});


defineExpose({fetchMediaItems});

</script>

<template>
  <div v-if="isLoading" class="text-gray-500 text-center py-4">
    Loading media items...
  </div>

  <div v-else-if="items.length === 0" class="text-gray-500 text-center py-4">
    No media items available.
  </div>

  <template v-else>
    <draggable
        v-if="allowOrdering"
        class="flex-1 overflow-y-auto p-2 max-h-[400px] scrollbar"
        :list="items"
        :item-key="(item: MediaItem) => item.uuid "
        ghost-class="ghost"
        handle=".handle"
        @start="dragging = true"
        @end="() => { dragging = false; reorderMediaItems(); }"
    >
      <template #item="{ element, index }">
        <MediaCollectionItem :item="element"
                             :editable="editable"
                             :deletable="deletable"
                             :allow-ordering="allowOrdering"
                             :downloadable="downloadable"
                             :class="{ 'deleting': deletingItem === element.uuid }"
                             :is-last-item="index === items.length - 1"
                             @item:delete="deleteItem"/>
      </template>
    </draggable>
    <div class="flex-1 overflow-y-auto p-2 max-h-[400px] scrollbar" v-else>
      <MediaCollectionItem
          v-for="(element, index) in items"
          :key="element.uuid"
          :item="element"
          :editable="editable"
          :downloadable="downloadable"
          :deletable="deletable"
          :allow-ordering="allowOrdering"
          :class="{ 'deleting': deletingItem === element.uuid }"
          :is-last-item="index === items.length - 1"
          @item:delete="deleteItem"/>
    </div>

  </template>


</template>

<style>
@import url("@/style.css");

.ghost {
  @apply opacity-90 scale-105 bg-gray-100 border-2 border-dashed border-gray-300 rounded-2xl;
}

.deleting {
  @apply opacity-50 transition-opacity duration-300 pointer-events-none;
}
</style>
