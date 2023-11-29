import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', description: 'Document title', required: true },
    category: {
      type: 'string',
      description: 'ID of the category this page belongs to',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}));

const Config = defineDocumentType(() => ({
  name: 'Config',
  filePathPattern: 'config.json',
  contentType: 'data',
  isSingleton: true,
  fields: {
    categories: {
      type: 'json',
      default: {},
      description:
        'Object where keys are category IDs and values are display names',
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Doc, Config],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
  },
});
