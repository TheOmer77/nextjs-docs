import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files';
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

const HomePageConfig = defineNestedType(() => ({
  name: 'HomePageConfig',
  fields: {
    title: { type: 'string', description: 'Home page main title.' },
    tagline: {
      type: 'string',
      description: 'Short text that appears on the home page below the title.',
    },
    mainBtnText: {
      type: 'string',
      description: 'Text for the main button on the home page.',
      default: 'Get started',
    },
    mainBtnUrl: {
      type: 'string',
      default: '/docs/get-started',
      description:
        'URL of the page opened when clicking on the main button on the home page.',
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
    homePage: {
      type: 'nested',
      of: HomePageConfig,
      default: {},
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
