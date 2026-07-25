// @ts-check
import { defineConfig } from 'astro/config';
import remarkBasePath from './src/plugins/remark-base-path.mjs';

const BASE = '/mmg-site-astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://schege882.github.io',
  base: BASE,
  markdown: {
    remarkPlugins: [[remarkBasePath, `${BASE}/`]],
  },
});
