import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://architgupta.me',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    // /blog is a placeholder until the first posts ship
    sitemap({ filter: (page) => !page.endsWith('/blog/') }),
  ],
});
