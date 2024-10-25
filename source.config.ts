import {
  defineDocs,
  defineConfig,
  frontmatterSchema,
} from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs({
  dir: 'data',
  docs: {
    schema: frontmatterSchema.extend({
      title: z.string().default(''),
      showTitle: z.boolean().default(true),
      showSidebar: z.boolean().default(true),
    }),
  },
});

export default defineConfig();
