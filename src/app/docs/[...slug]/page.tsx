import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';

import markupStyles from 'styles/markup.module.scss';

export const generateStaticParams = async () =>
  allDocs.map(doc => ({ slug: doc._raw.flattenedPath.split('/') }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find(doc => doc._raw.flattenedPath === params.slug);
  return { title: doc?.title };
};

const DocLayout = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocs.find(
    doc => doc._raw.flattenedPath === params.slug.join('/')
  );
  if (!doc) return notFound();

  const MdxContent = getMDXComponent(doc.body.code);

  return (
    <div className={markupStyles.container}>
      <h1>{doc.title}</h1>
      <MdxContent />
    </div>
  );
};

export default DocLayout;
