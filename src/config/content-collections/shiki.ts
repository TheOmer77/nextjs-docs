import { type Options } from '@content-collections/mdx';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import {
  type BundledLanguage,
  createHighlighter,
  type StringLiteralUnion,
} from 'shiki';
import { createCssVariablesTheme } from 'shiki/core';

const SHIKI_LANGS = [
  'html',
  'js',
  'json',
  'jsx',
  'md',
  'mdx',
  'ts',
  'tsx',
] satisfies StringLiteralUnion<BundledLanguage, string>[];

type Pluggable = NonNullable<Options['rehypePlugins']>[number];
const cssVars = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
});
const highlighter = await createHighlighter({
  themes: [cssVars],
  langs: SHIKI_LANGS,
});
export const rehypeShiki = [
  rehypeShikiFromHighlighter,
  highlighter,
  { theme: cssVars.name },
] satisfies Pluggable;
