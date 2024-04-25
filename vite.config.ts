import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "tsx",
  },
  root: "./",
  resolve: {
    alias: {
      "@": "/src",
      crypto: "crypto-browserify",
    },
  },
  envPrefix: "REACT_APP_",
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
})
