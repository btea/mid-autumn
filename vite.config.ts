import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    host: true
  },
  plugins: [vuePlugin()]
})
