import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: [
    '@wxt-dev/module-react',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: './src',
  vite: () => ({
    plugins: [tailwindcss()],
  }),
})
