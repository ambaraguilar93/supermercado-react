import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Nombre del repositorio en GitHub: en GitHub Pages el sitio vive en /<repositorio>/
// Si algún día se renombra el repositorio, cambiar solo esta constante.
const REPOSITORIO = 'supermercado-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // En producción (build y preview) el sitio cuelga de /<repositorio>/; en desarrollo, de la raíz
  base: mode === 'production' ? `/${REPOSITORIO}/` : '/',
  plugins: [react(), tailwindcss()],
}))
