// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja', 'zh-cn', 'zh-hant', 'id', 'vi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  site: 'https://bokuchi.com',
  integrations: [sitemap()],
});
