import { defineDocumentType, makeSource } from 'contentlayer/source-files';
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
    displaySidebar: {
      type: 'boolean',
      description:
        'Whether or not to display the sidebar when this page is viewed.',
      default: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: doc => {
        const filenameParts = doc._raw.sourceFileName
          .split('.')
          .slice(0, -1)
          .join('.')
          .split('-');
        return `/${
          isNaN(Number(filenameParts[0]))
            ? doc._raw.flattenedPath
            : [
                ...doc._raw.flattenedPath.split('/').slice(0, -1),
                filenameParts.slice(1).join('-'),
              ].join('/')
        }`;
      },
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
