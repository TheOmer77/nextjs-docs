import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { createHighlighter } from 'shiki';
import { createCssVariablesTheme } from 'shiki/core';

// Shiki stuff
const cssVars = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
});
const highlighter = await createHighlighter({
  themes: [cssVars],
  langs: ['html', 'js', 'json', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
});

const doc = defineCollection({
  name: 'Doc',
  directory: 'data',
  include: '**/*.md?(x)',
  schema: z => ({
    /** Title of this page. */
    title: z.optional(z.string()),
    /** ID of the category this page belongs to. */
    category: z.optional(z.string()),
    /** Whether or not to show the page's title at its top. */
    showTitle: z.boolean().default(true),
    /** Whether or not to show the sidebar when this page is viewed. */
    showSidebar: z.boolean().default(true),
    /** Whether or not to include this page as an item in the sidebar. */
    includeInSidebar: z.boolean().default(true),
  }),
  transform: async (doc, ctx) => {
    const slugs = doc._meta.path === 'index' ? [] : doc._meta.path.split('/');
    const url = `/${slugs
      .map(slug => {
        const parts = slug.split('-');
        return (isNaN(Number(parts[0])) ? parts : parts.slice(1)).join('-');
      })
      .join('/')}`;

    const code = await compileMDX(ctx, doc, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [rehypeShikiFromHighlighter, highlighter, { theme: cssVars.name }],
        rehypeSlug,
      ],
    });

    return { ...doc, _id: doc._meta.filePath, url, body: { code } };
  },
});

const siteConfig = defineCollection({
  name: 'Config',
  directory: 'data',
  include: 'config.json',
  parser: 'json',
  schema: z => ({
    /** Site title, appearing by default as the home page's `<title>`, as well
     * as in the Nav's header. */
    title: z.string().default('Docs'),
    /** Template for the `<title>` of pages. */
    titleTemplate: z.string().default('%s – Docs'),
    /** Object where keys are category IDs and values are display names. */
    categories: z.record(z.string(), z.string()).default({}),
  }),
});

export default defineConfig({ collections: [doc, siteConfig] });
