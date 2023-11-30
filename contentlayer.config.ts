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
    title: {
      type: 'string',
      description: 'Title of this page.',
      required: true,
    },
    category: {
      type: 'string',
      description: 'ID of the category this page belongs to',
    },
    showTitle: {
      type: 'boolean',
      description: "Whether or not to show the page's title at its top.",
      default: true,
    },
    showInSidebar: {
      type: 'boolean',
      description:
        'Whether or not to show this page as an item in the sidebar.',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => `/${doc._raw.flattenedPath}`,
    },
  },
}));

const HomeAction = defineNestedType(() => ({
  name: 'HomeAction',
  fields: {
    text: {
      type: 'string',
      required: true,
      description: 'Text for this action button.',
    },
    url: {
      type: 'string',
      required: true,
      description: 'URL opened by clicking on this action button.',
    },
    primary: {
      type: 'boolean',
      default: false,
      description:
        "Whether or not this is the primary action, which uses the theme's primary color.",
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
    actions: {
      type: 'list',
      of: HomeAction,
      description:
        'Action buttons appearing below the tagline on the home page.',
      default: [
        { text: 'Get started', url: '/docs/get-started', primary: true },
      ],
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
        "Site title, appearing by default as the home page's `<title>`, as well as in the Nav's header.",
    },
    titleTemplate: {
      type: 'string',
      default: '%s – Docs',
      description:
        'Template for the `<title>` of pages other than the home page.',
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
