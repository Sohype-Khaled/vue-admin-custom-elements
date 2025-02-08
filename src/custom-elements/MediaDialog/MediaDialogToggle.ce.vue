<script setup lang="ts">

import {type PropType, provide, ref} from "vue";
import {MediaLibraryServiceOptions} from "@/types/mediaLibrary.ts";
import {useMediaOptions} from "@/composables/useMediaOptions.ts";
import {useDialog} from "@/composables/useDialog.ts";
import MediaDialog from "@/custom-elements/MediaDialog/MediaDialog.vue";

const props = defineProps({
  options: {type: [Object, String] as PropType<MediaLibraryServiceOptions | string>, required: true},
  title: {type: String, default: "Media Dialog"},
  editable: {type: [Boolean, String], default: false},
  deletable: {type: [Boolean, String], default: false},
  allowOrdering: {type: [Boolean, String], default: false},
  withUpload: {type: [Boolean, String], default: false},
  downloadable: {type: [Boolean, String], default: false},
});

const withUpload = ref(props.withUpload === true || props.withUpload === 'true');

const editable = ref(props.editable === true || props.editable === 'true');
const deletable = ref(props.deletable === true || props.deletable === 'true');
const allowOrdering = ref(props.allowOrdering === true || props.allowOrdering === 'true');
const downloadable = ref(props.downloadable === true || props.downloadable === 'true');

const {parsedOptions} = useMediaOptions(ref(props.options));
const dialog = useDialog()

provide("options", parsedOptions.value);

const openDialog = () => {
  dialog.open(MediaDialog,
      {
        options: parsedOptions.value,
        editable,
        deletable,
        allowOrdering,
        withUpload,
        downloadable
      },
      {
        title: props.title
      },)
}
</script>

<template>
  <slot @click="openDialog"></slot>
</template>

<style>
@import url("@/style.css");
</style>