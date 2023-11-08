import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';

import Markup from 'components/Markup';

export const generateStaticParams = async () =>
  allDocs.map(doc => ({ slug: doc._raw.flattenedPath.split('/') }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const doc = allDocs.find(
    doc => doc._raw.flattenedPath === params.slug.join('/')
  );
  return { title: doc?.title };
};

const DocLayout = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocs.find(
    doc => doc._raw.flattenedPath === params.slug.join('/')
  );
  if (!doc) return notFound();

  return (
    <>
      <header className='prose dark:prose-invert prose-xl mx-auto max-w-3xl pt-8'>
        <h1>{doc.title}</h1>
      </header>
      <Markup doc={doc} />
    </>
  );
};

export default DocLayout;
