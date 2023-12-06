import { notFound } from 'next/navigation';

import { Mdx } from 'components/layout/Mdx';
import { allDocs, specialFileNames } from 'constants/contentlayer';

export const generateStaticParams = async () =>
  allDocs.map(doc => ({ slug: doc._raw.flattenedPath.split('/') }));

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const doc = allDocs
    .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
    .find(doc => doc.url === `/${params.slug.join('/')}`);
  return { title: doc?.title };
};

const DocLayout = ({ params }: { params: { slug: string[] } }) => {
  const doc = allDocs
    .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
    .find(doc => doc.url === `/${params.slug.join('/')}`);
  if (!doc) return notFound();

  return <Mdx doc={doc} />;
};

export default DocLayout;
