import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'wxt'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: [
    '@wxt-dev/module-react',
    '@wxt-dev/webextension-polyfill',
    '@wxt-dev/auto-icons',
  ],
  srcDir: './src',
  autoIcons: {
    baseIconPath: '../public/logo.svg',
    developmentIndicator: false,
    sizes: [16, 32, 48, 96, 128],
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    permissions: ['storage'],
  },
})
