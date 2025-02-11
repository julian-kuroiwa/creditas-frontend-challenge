/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { ProjectPaths } from './vite.utils'

export default defineConfig({
  resolve: {
    alias: {
      '~': ProjectPaths.Source,
    },
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup.ts'],
  },
})
