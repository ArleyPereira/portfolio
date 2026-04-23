import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: (() => {
    // GitHub Pages serves the site at /<repo>/ (except user/organization pages).
    // `GITHUB_REPOSITORY` looks like "owner/repo" in Actions.
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
    if (!repo) return '/'
    if (repo.endsWith('.github.io')) return '/'
    return `/${repo}/`
  })(),
  plugins: [tailwindcss(), react()],
})
