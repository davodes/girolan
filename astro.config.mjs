import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://girolan.net',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      customPages: [
        'https://girolan.net',
        'https://girolan.net/aire-acondicionado',
        'https://girolan.net/calefaccion',
        'https://girolan.net/ventilacion',
        'https://girolan.net/frio-industrial',
        'https://girolan.net/proyectos',
        'https://girolan.net/clientes',
        'https://girolan.net/blog',
        'https://girolan.net/contacto'
      ]
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    }
  }
});