import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Space-tourism-multi-page-website/', // GitHub repository name
})
