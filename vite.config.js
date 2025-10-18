import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5500,       // 👈 run on port 5500
    strictPort: false, // 👈 if 5500 is busy, throw error instead of switching
  },
})

