import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    middlewareMode: false,
    hmr: {
      host: '5173-i5evitfl5ohu4ozu0t26k-16ed6e9f.manus.computer',
      protocol: 'https',
      port: 443
    }
  }
})

