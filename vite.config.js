import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// If deploying under a subpath (e.g., GitHub Pages at /team-portfolio-project/),
// set the base path so built asset links resolve correctly.
// Edit this if your deploy URL path changes.
export default defineConfig({
  plugins: [react()],
  base: '/team-portfolio-project/',
})
