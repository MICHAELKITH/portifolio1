import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portifolio1/'
  plugins: [react()],
  server: {
    hmr: {
      overlay: false, // Disable HMR overlay
    },
  },
})
