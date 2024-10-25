import Link from 'fumadocs-core/link';
import type { MDXComponents } from 'mdx/types';

import { ErrorLayout } from '@/components/layout/error';
import { HomeLayout } from '@/components/layout/home';
import { Alert, MdxBlockquote } from '@/components/layout/mdx';
export const mdxComponents = {
  a: Link,
  blockquote: MdxBlockquote,
  Alert,

  HomeLayout,
  ErrorLayout,
} satisfies MDXComponents;
