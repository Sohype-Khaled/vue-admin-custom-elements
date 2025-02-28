import type { LightboxItem } from "./lightbox";

declare global {
  interface Window {
    lightboxGroups: Record<string, LightboxItem[]>;
  }
}

declare module "vue-admin-custom-elements" {
  import { type App } from "vue";

  const install: (app: App) => void;
  export default { install };
}