import {defineCustomElement} from "vue";

import DropZone from "@/custom-elements/inputs/DropZone/DropZone.ce.vue";
import Lightbox from "@/custom-elements/Lightbox/Lightbox.ce.vue";
import LightboxGallery from "@/custom-elements/Lightbox/LightboxGallery.ce.vue";
import MediaCollection from "@/custom-elements/MediaCollection/MediaCollection.ce.vue";
import MediaViewer from "@/custom-elements/MediaViewers/MediaViewer.ce.vue";
import MediaPreview from "@/custom-elements/MediaPreview/MediaPreview.ce.vue";
import Overlay from "@/components/ui/Overlay/Overlay.ce.vue";
import MediaDialogToggle from "@/custom-elements/MediaDialog/MediaDialogToggle.ce.vue";
import DetailsCard from "@/custom-elements/DetailsCard/DetailsCard.ce.vue";
import DetailsCardItem from "@/custom-elements/DetailsCard/DetailsCardItem.ce.vue";
import OrderItem from "@/custom-elements/OrderItem/OrderItem.ce.vue";
import BtnUpload from "@/custom-elements/inputs/BtnUpload/BtnUpload.ce.vue";

const elements = {
  'input-dropzone': DropZone,
  'light-box': Lightbox,
  'lightbox-gallery': LightboxGallery,
  'media-viewer': MediaViewer,
  'media-collection': MediaCollection,
  'media-preview': MediaPreview,
  'overlay-container': Overlay,
  'media-dialog-toggle': MediaDialogToggle,
  'details-card': DetailsCard,
  'details-card-item': DetailsCardItem,
  'order-item': OrderItem,
  'btn-upload': BtnUpload
}

for (const name in elements) {
  if (elements.hasOwnProperty(name)) {
    const element = defineCustomElement(elements[name as keyof typeof elements]);
    customElements.define(name, element);
  }
}


