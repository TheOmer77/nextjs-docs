import { notFound } from 'next/navigation';

import { Mdx } from '@/components/layout/mdx';
import { allDocs, specialFileNames } from '@/constants/contentlayer';

export const generateStaticParams = async () =>
  allDocs.map(doc => ({ slug: doc._raw.flattenedPath.split('/') }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const slug = (await params).slug;
  const doc = allDocs
    .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
    .find(doc => doc.url === `/${slug.join('/')}`);
  return { title: doc?.title };
};

const DocPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  const doc = allDocs
    .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
    .find(doc => doc.url === `/${slug.join('/')}`);
  if (!doc) return notFound();

  return <Mdx doc={doc} />;
};

export default DocPage;
