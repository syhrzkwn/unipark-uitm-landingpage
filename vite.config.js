import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    input: [
      './src/custom.scss',
    ],
    refresh: true,
  })],
})
