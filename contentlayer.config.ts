import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    id: { type: 'string' },
    title: { type: 'string', required: true },
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: doc => doc.id || doc._raw.flattenedPath.replace('docs/', ''),
    },
    slug: {
      type: 'string',
      resolve: doc => doc._raw.flattenedPath.replace('docs/', ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
  },
});
