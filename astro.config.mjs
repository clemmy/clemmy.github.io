import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.clemmy.ninja',
  output: 'static',
  publicDir: 'static',
  integrations: [react()],
  server: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: ['golden-green-owl-bo4a2.sprites.app'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
