import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
    include: /\.(jsx?|tsx?)$/,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
})

