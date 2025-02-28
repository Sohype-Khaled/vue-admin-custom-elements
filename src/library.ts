export * from "@/types/index.ts";

import DropZone from "@/custom-elements/inputs/DropZone/DropZone.ce.vue";
import Lightbox from "@/custom-elements/Lightbox/Lightbox.ce.vue";
import LightboxGallery from "@/custom-elements/Lightbox/LightboxGallery.ce.vue";
import MediaViewer from "@/custom-elements/MediaViewers/MediaViewer.ce.vue";
import MediaCollection from "@/custom-elements/MediaCollection/MediaCollection.ce.vue";
import MediaPreview from "@/custom-elements/MediaPreview/MediaPreview.ce.vue";
import Overlay from "@/components/ui/Overlay/Overlay.ce.vue";
import MediaDialogToggle from "@/custom-elements/MediaDialog/MediaDialogToggle.ce.vue";
import DetailsCard from "@/custom-elements/DetailsCard/DetailsCard.ce.vue";
import DetailsCardItem from "@/custom-elements/DetailsCard/DetailsCardItem.ce.vue";
import BtnUpload from "@/custom-elements/inputs/BtnUpload/BtnUpload.ce.vue";
import UploadedList from "@/custom-elements/inputs/BtnUpload/UploadedList.ce.vue";
import SVGIcon from "@/components/SVGIcon/SVGIcon.vue";

const components = [
  DropZone,
  Lightbox,
  LightboxGallery,
  MediaCollection,
  MediaViewer,
  MediaPreview,
  Overlay,
  MediaDialogToggle,
  DetailsCard,
  DetailsCardItem,
  BtnUpload,
  SVGIcon,
  UploadedList,
];

const install = (app: any) => {
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component);
    }
  });
};

// Named exports for individual usage
export {
  DropZone,
  Lightbox,
  LightboxGallery,
  MediaCollection,
  MediaViewer,
  MediaPreview,
  Overlay,
  MediaDialogToggle,
  DetailsCard,
  DetailsCardItem,
  BtnUpload,
  SVGIcon,
  UploadedList,
};


// Default export for Vue plugin installation
export default {install};
