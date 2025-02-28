import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath, URL} from "node:url";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
  const isCustomElement = mode === "custom-element";
  const isLibrary = mode === "library";

  const CommonBuildConfig = {
    outDir: "dist/dev",
    emptyOutDir: false,
    lib: {
      entry: "./src/index.ts",
      name: "VueAdminCustomElements",
      fileName: (format: string) => `vue-admin-custom-elements.dev.${format}.js`
    }
  }

  const CEBuildConfig = {
    outDir: "dist/ce",
    manifest: true,
    lib: {
      entry: "./src/elements.ts",
      filename: (format: string) => `vue-admin-custom-elements.ce.${format}.js`,
      formats: ["iife"]
    },
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true, // Prevent code splitting for IIFE
      },
    },
  }
  const LibraryBuildConfig = {
    outDir: "dist/lib",
    cssCodeSplit: true,
    lib: {
      entry: "./src/library.ts",
      filename: (format: string) => `vue-admin-custom-elements.lib.${format}.js`,
      formats: ["es", "umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {vue: "Vue"},
      },
    },
  }

  const selectedConfig = isLibrary
    ? LibraryBuildConfig
    : isCustomElement
      ? CEBuildConfig
      : {};

  const finalBuildConfig = { ...CommonBuildConfig, ...selectedConfig };

  return {
    define: {"process.env.NODE_ENV": JSON.stringify("production")},
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
        entryRoot: "./src",
        outDir: "dist/lib",
        insertTypesEntry: true,
        cleanVueFileName: true,
        rollupTypes: true,
        tsconfigPath: "./tsconfig.json",
        include: ["./src/**/*", "./src/types/**/*"],
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: finalBuildConfig,
  };
});
