import type {LightboxItem} from "@/types/lightbox.ts";

declare global {
  interface Window {
    lightboxGroups: Record<string, LightboxItem[]>;
  }
}