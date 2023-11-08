import { type Doc } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

const Markup = ({ doc }: { doc: Doc }) => {
  const MdxContent = getMDXComponent(doc.body.code);
  return (
    <div className='prose dark:prose-invert mx-auto max-w-3xl py-8'>
      <MdxContent />
    </div>
  );
};

export default Markup;
