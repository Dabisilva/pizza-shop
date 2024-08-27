import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: ['vitest'],
      dts: true,
    }),
  ],
  test: {
    globals: true,
    setupFiles: './test/setup.ts',
    environment: 'happy-dom',
  },
})
