export interface LightboxItem {
  file?: File;
  url: string;
  downloadUrl: string;
  filename: string;
  type: string;
  caption?: string;
  thumbnail: string;
  group: string;
}

declare global {
  interface Window {
    lightboxGroups: Record<string, string[]>;
  }
}