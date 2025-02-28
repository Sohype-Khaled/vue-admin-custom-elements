import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isCustomElement = mode === "custom-element";
  const isLibrary = mode === "library";

  return {
    define: { "process.env.NODE_ENV": JSON.stringify("production") },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // Treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes("-"),
          },
        },
      }),
      isLibrary &&
      dts({
        outDir: "dist/lib",
        insertTypesEntry: true,
        cleanVueFileName: true,
      }),
    ].filter(Boolean), // Remove `false` values from the plugins array
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: isCustomElement ? "dist/ce" : isLibrary ? "dist/lib" : "dist/dev",
      emptyOutDir: false,
      manifest: !isLibrary,
      cssCodeSplit: !isCustomElement,
      lib: {
        entry: isCustomElement
          ? "./src/elements.ts"
          : isLibrary
            ? "./src/library.ts"
            : "./src/index.ts",
        name: "MyComponentLibrary",
        fileName: (format) =>
          isCustomElement
            ? `vue-admin-custom-elements.ce.${format}.js`
            : isLibrary
              ? `vue-admin-custom-elements.lib.${format}.js`
              : `vue-admin-custom-elements.dev.${format}.js`,
        formats: isCustomElement ? ["iife"] : ["es", "umd"],
      },
      rollupOptions: {
        external: isCustomElement ? [] : ["vue"], // Keep Vue external for the library
        output: {
          format: isCustomElement ? "iife" : undefined,
          globals: { vue: "Vue" },
          inlineDynamicImports: true, // Prevent code splitting for IIFE
        },
      },
    },
  };
});
