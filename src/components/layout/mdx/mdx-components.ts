import Link from 'fumadocs-core/link';

import { ErrorLayout } from '@/components/layout/error';
import { HomeLayout } from '@/components/layout/home';
import { Alert, MdxBlockquote } from '@/components/layout/mdx';

import type { MDXComponents } from 'mdx/types';
export const mdxComponents = {
  a: Link,
  blockquote: MdxBlockquote,
  Alert,

  HomeLayout,
  ErrorLayout,
} satisfies MDXComponents;
