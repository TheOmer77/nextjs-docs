'use client';

import { getMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

import { type Doc } from 'contentlayer/generated';
import { HomeLayout } from 'layouts';
import { MdxLink } from './MdxLink';
import { cn } from 'utils';

export const mdxComponents: MDXComponents = {
  a: MdxLink,
  HomeLayout,
};

export const Mdx = ({ doc }: { doc: Doc }) => {
  const MdxContent = getMDXComponent(doc.body.code);
  return (
    <div
      className={cn(
        `prose mx-auto max-w-[calc(100vw-2rem)] py-8
dark:prose-invert`,
        doc.displaySidebar && 'md:max-w-[calc(100vw-22rem)] lg:max-w-3xl'
      )}
    >
      {doc.title && doc.showTitle && (
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-[3.5rem] '>
          {doc.title}
        </h1>
      )}
      <MdxContent components={mdxComponents} />
    </div>
  );
};

export default Mdx;
