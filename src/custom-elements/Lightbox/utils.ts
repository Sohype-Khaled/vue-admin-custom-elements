import {ref} from "vue";
import type {LightboxItem} from "@/types/lightbox.ts";


/**
 * Converts a File object to a LightboxItem.
 * @param file The File object from input
 * @param group The group name (e.g., "gallery")
 * @returns A Promise resolving to a LightboxItem object
 */
export function createLightboxItem(file: File, group: string): Promise<LightboxItem> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const thumbnail = reader.result as string; // Data URL for image preview
      const url = URL.createObjectURL(file); // Blob URL for file preview

      resolve({
        file,
        url,
        downloadUrl: url,
        filename: file.name,
        type: file.type,
        caption: file.name, // Optional caption
        thumbnail,
        group,
      });
    };

    reader.onerror = (error) => reject(error);

    if (file.type.startsWith("image/")) {
      reader.readAsDataURL(file); // Read image files as Data URL
    } else {
      resolve({
        file,
        url: URL.createObjectURL(file),
        downloadUrl: URL.createObjectURL(file),
        filename: file.name,
        type: file.type,
        caption: file.name,
        thumbnail: "", // Default placeholder for non-image files
        group,
      });
    }
  });
}

/**
 * Vue 3 Composable to manage Lightbox items from file input
 */
export function useLightbox(group = "gallery") {
  const lightboxItems = ref<LightboxItem[]>([]);

  /**
   * Handles file selection and conversion to LightboxItems.
   */
  async function handleFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (!target.files) return;

    const files = Array.from(target.files);
    const newItems = await Promise.all(files.map((file) => createLightboxItem(file, group)));

    lightboxItems.value.push(...newItems);
  }

  return {
    lightboxItems,
    handleFileChange,
  };
}