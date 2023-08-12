import {defineConfig} from 'vite'

import react from '@vitejs/plugin-react'
import {qrcode} from 'vite-plugin-qrcode'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode()],

  build: {
    rollupOptions: {
      input: {
        index: './index.html',
      },
    },
  },
  server: {
    port: 2000,
    open: true,
  },
})