/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

import { ProjectPaths } from './vite.utils'

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '~': ProjectPaths.Source,
    },
  },
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  },
})
