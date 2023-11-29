import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `**/*.md?(x)`,
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
    title: {
      type: 'string',
      default: 'Docs',
      description:
        "Site title, appearing by default as the home page `<title>` as well as in the Nav's header.",
    },
    titleTemplate: {
      type: 'string',
      default: '%s – Docs',
      description: 'Template for pages `<title>`.',
    },
    categories: {
      type: 'json',
      default: {},
      description:
        'Object where keys are category IDs and values are display names.',
    },
    getStartedUrl: {
      type: 'string',
      default: '/docs/get-started',
      description:
        "URL of the page opened when clicking on the 'Get started' button on the home page.",
    },
    notFoundText: {
      type: 'string',
      default: 'Not found.',
      description: 'Text which will appear on the 404 not found page.',
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
