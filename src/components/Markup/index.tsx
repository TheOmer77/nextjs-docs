'use client';

import { type Doc } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

const Markup = ({ doc }: { doc: Doc }) => {
  const MdxContent = getMDXComponent(doc.body.code);
  return (
    <div
      className='prose mx-auto max-w-[calc(100vw-2rem)] py-8 dark:prose-invert
md:max-w-[calc(100vw-22rem)] lg:max-w-3xl'
    >
      <MdxContent />
    </div>
  );
};

export default Markup;
