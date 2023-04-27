import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind()],
  site: `https://alextorresdev.github.io/cet-docs`,
  base: '/cet-docs/',
});
