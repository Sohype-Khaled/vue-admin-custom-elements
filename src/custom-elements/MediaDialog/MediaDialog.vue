<script setup lang="ts">
import DropZone from "@/custom-elements/inputs/DropZone/DropZone.ce.vue";
import {type PropType, ref} from "vue";
import {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import DialogBody from "@/components/ui/Overlay/Dialog/DialogBody.vue";
import MediaCollection from "@/custom-elements/MediaCollection/MediaCollection.ce.vue";

const props = defineProps({
  options: {type: Object as PropType<MediaLibraryServiceOptions>, required: true},
  editable: {type: Boolean, default: false},
  withUpload: {type: Boolean, default: false},
  deletable: {type: Boolean, default: false},
  allowOrdering: {type: Boolean, default: false},
  downloadable: {type: Boolean, default: false},
})
const mediaCollectionRef = ref<InstanceType<typeof MediaCollection> | null>(null);


const refreshMedia = () => {
  if (mediaCollectionRef.value) {
    (mediaCollectionRef.value as InstanceType<typeof MediaCollection>).fetchMediaItems();
  }
};
</script>

<template>
  <DialogBody>
    <DropZone :options="options"
              :clear-on-complete="true"
              @file-uploaded="refreshMedia"
              v-if="withUpload"/>
    <MediaCollection
        ref="mediaCollectionRef"
        :deletable="deletable"
        :allow-ordering="allowOrdering"
        :options="options"
        :downloadable="downloadable"
        :editable="editable"/>
  </DialogBody>
</template>

