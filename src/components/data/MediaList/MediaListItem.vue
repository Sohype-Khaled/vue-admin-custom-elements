<script setup lang="ts">
import {computed, inject, onMounted, type PropType, ref} from "vue";
import MediaLibraryService from "@/services/mediaLibraryService.ts";
import {MediaItem, MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";

const props = defineProps({
  item: {
    type: Object as PropType<MediaItem>,
    required: true,
  }
})
const emit = defineEmits(['delete']);
const options = inject<MediaLibraryServiceOptions>("options");

const progress = ref(0);

const uploaded = computed(() => props.item.uploaded);

const fileName = computed(() => {
  if (typeof props.item.file === "string")
    return props.item?.file_name as string
  else if (typeof props.item.file === "object")
    return props.item.file.name
})
const fileType = computed(() => {
  let type = ''
  if (typeof props.item.file === "string")
    type = props.item?.mime_type as string
  else if (typeof props.item.file === "object")
    type = props.item.file.type
  return type.split("/")[0];
});

const size = computed(() => {
  let size = 0
  if (typeof props.item.file === "string")
    size = props.item?.size as number
  else if (typeof props.item.file === "object")
    size = props.item.file.size

  const kb = size / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
});


const handleDelete = () => {
  emit("delete", props.item.file);
}

onMounted(() => {
  if (!props.item?.uploaded) {
    const service = new MediaLibraryService(options as MediaLibraryServiceOptions);
    service.uploadFile(props.item.file as File, (progressValue) => {
      progress.value = progressValue
    })
  }
})
</script>


<template>
  <div class="flex items-center justify-start p-2 border-b border-gray-200">
    <!-- Drag Handle -->
    <div class="cursor-move text-gray-400 hover:text-gray-600 handle pe-3">
      <svg class="w-5 h-5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
        <rect width="48" height="48" fill="none"></rect>
        <path d="M46,20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2H2a2,2,0,0,1,2-2H44a2,2,0,0,1,2,2Z"></path>
        <path d="M46,28a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2H2a2,2,0,0,1,2-2H44a2,2,0,0,1,2,2Z"></path>
      </svg>
    </div>


    <!-- File Details -->
    <div class="flex items-center space-x-3 grow">
      <div>
        <div class="text-sm font-medium text-gray-800">{{ fileName }}</div>
        <div class="text-xs text-gray-500 uppercase">
          {{ fileType }} | {{ size }}
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-3" v-if="!uploaded">
      <progress
          :value="progress"
          max="100"
          class="custom-progress"
      ></progress>
      <button
          @click="handleDelete"
          class="p-1 text-red-600 bg-red-100 rounded-full hover:bg-red-200"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="flex items-center space-x-3" v-else>
      <button @click="handleDelete"
              class="p-1 text-red-600 bg-red-100 rounded-full hover:bg-red-200">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

