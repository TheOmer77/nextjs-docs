import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';

import Markup from 'components/Markup';
import styles from './styles.module.scss';

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
      <header className={styles.header}>
        <h1 className={styles.title}>{doc.title}</h1>
      </header>
      <Markup doc={doc} />
    </>
  );
};

export default DocLayout;
