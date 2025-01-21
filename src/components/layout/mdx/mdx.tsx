'use client';

import Link from 'next/link';
import { MDXContent } from '@content-collections/mdx/react';

import { HomeLayout } from '@/components/layout/home';
import { useDoc } from '@/hooks/use-doc';
import { cn } from '@/lib/cn';
import type { Doc } from '@/types/docs';

import { MdxBlockquote } from './mdx-blockquote';
import { h1, h2, h3, h4 } from './mdx-heading';

export const mdxComponents = {
  h1,
  h2,
  h3,
  h4,
  a: Link,
  blockquote: MdxBlockquote,

  HomeLayout,
};

export type MDXProps = { doc: Doc };

export const MDX = () => {
  const doc = useDoc();
  return (
    <main
      className={cn(
        `prose mx-auto w-full max-w-[100vw] px-4 py-8 [print-color-adjust:exact] dark:prose-invert print:max-w-none print:px-0`,
        doc?.showSidebar &&
          'md:max-w-[calc(100vw-22rem)] lg:max-w-[min(calc(100vw-22rem),theme(maxWidth.3xl))]',
        doc?.showSidebar &&
          doc?.showToc &&
          'lg:max-w-[min(calc(100vw-22rem),theme(maxWidth.2xl))]'
      )}
    >
      {doc?.title && doc?.showTitle && (
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-6xl'>
          {doc?.title}
        </h1>
      )}
      <MDXContent code={doc?.body.code || ''} components={mdxComponents} />
    </main>
  );
};

export default MDX;
