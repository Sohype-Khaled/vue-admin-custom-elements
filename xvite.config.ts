// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import {fileURLToPath, URL} from 'node:url'
//
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     vue({
//       template: {
//         compilerOptions: {
//           // treat all tags with a dash as custom elements
//           isCustomElement: (tag) => tag.includes('-')
//         }
//       }
//     })
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     }
//   },
//   build: {
//     rollupOptions: {
//       input: 'src/main.ts',
//       output: {
//         format: 'iife', // ✅ Wraps the output in an IIFE
//         name: 'AdminComponents', // ✅ Global variable name (required for IIFE)
//         entryFileNames: 'admin-components.js', // ✅ Set the file name
//       }
//     },
//     lib: {
//       entry: 'src/main.ts',
//       name: 'AdminComponents',
//       fileName: 'admin-components',
//       formats: ['es'],
//     },
//   }
// })
