import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // Cambia esta línea

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://francost15.github.io/msanchez/'
})