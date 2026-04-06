import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.clemmy.ninja',
  output: 'static',
  publicDir: 'static',
  integrations: [react(), tailwind()],
});
