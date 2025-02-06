import { defineConfig } from '@content-collections/core';

import { doc, siteConfig } from '@/config/content-collections';

export default defineConfig({ collections: [doc, siteConfig] });
