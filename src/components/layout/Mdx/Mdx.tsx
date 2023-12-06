'use client';

import { getMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

import { MdxLink } from './MdxLink';
import * as layouts from 'layouts';
import { cn } from 'utils';
import type { Doc } from 'types';

export const mdxComponents: MDXComponents = { a: MdxLink };

export type MdxProps = { doc: Doc; prose?: boolean };

export const Mdx = ({ doc, prose = true }: MdxProps) => {
  const MdxContent = getMDXComponent(doc.body.code);
  return prose ? (
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
      <MdxContent components={{ ...mdxComponents, ...layouts }} />
    </div>
  ) : (
    <MdxContent components={{ ...mdxComponents, ...layouts }} />
  );
};

export default Mdx;
