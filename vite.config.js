import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSass from 'vite-plugin-sass'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Nina-Carducci_Projet_9",
  plugins: [
    react(),
    vitePluginSass()
  ],
})
