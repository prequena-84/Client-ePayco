import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    outDir: 'build', // Cambia 'tu-carpeta-deseada' por el nombre de la carpeta que desees
  },
})
