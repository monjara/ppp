import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  base: '/',
  server: {
    port: 8080,
    host: true
  },
  build: {
    outDir: '../build'
  },
  envDir: '../',
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser'
    }
  },
  define: {
  }
})
