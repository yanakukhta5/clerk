import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
chokidarWatchOptions: {
  usePolling: true
},
plugins: [vue()],
resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: { 
         additionalData: `
          @import "@/styles/fonts.scss";
          @import "@/styles/variables.scss";
         `
     },
    },
  },
})
