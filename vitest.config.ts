import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      coverage: {
        exclude: ['commitlint.config.cjs', '.eslintrc.cjs', 'src/index.ts'],
        thresholds: {
          lines: 90,
          functions: 90,
          branches: 90,
          statements: 90
        }
      }
    }
  })
)
