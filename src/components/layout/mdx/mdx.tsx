'use client';

import { getMDXComponent } from 'next-contentlayer2/hooks';

import { ErrorLayout } from '@/components/layout/error';
import { HomeLayout } from '@/components/layout/home';
import { cn } from '@/lib/cn';

import { Alert } from './alert';
import { MdxBlockquote } from './mdx-blockquote';
import { MdxLink } from './mdx-link';

import type { Doc } from '@/types';

export const mdxComponents = {
  a: MdxLink,
  blockquote: MdxBlockquote,
  Alert,

  HomeLayout,
  ErrorLayout,
};

export type MdxProps = { doc: Doc; prose?: boolean };

export const Mdx = ({ doc, prose = true }: MdxProps) => {
  const MdxContent = getMDXComponent(doc.body.code);
  if (!prose) return <MdxContent components={mdxComponents} />;
  return (
    <div
      className={cn(
        `prose mx-auto max-w-[calc(100vw-2rem)] py-8 dark:prose-invert`,
        doc.displaySidebar && 'md:max-w-[calc(100vw-22rem)] lg:max-w-3xl'
      )}
    >
      {doc.title && doc.showTitle && (
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-[3.5rem]'>
          {doc.title}
        </h1>
      )}
      <MdxContent components={mdxComponents} />
    </div>
  );
};

export default Mdx;
