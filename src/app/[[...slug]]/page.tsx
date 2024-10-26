import { notFound } from 'next/navigation';

import { MDX } from '@/components/layout/mdx';
import { allDocs, config, specialFileNames } from '@/constants/contentlayer';

export const generateStaticParams = async () =>
  allDocs.map(doc => ({ slug: doc._raw.flattenedPath.split('/') }));

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const slug = (await params).slug;
  const doc = slug
    ? allDocs
        .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
        .find(doc => doc.url === `/${slug.join('/')}`)
    : allDocs.find(doc => doc.url === '/index');
  return {
    title: doc?.title
      ? config.titleTemplate.replace('%s', doc.title)
      : config.title,
  };
};

const DocPage = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const slug = (await params).slug;
  const doc = slug
    ? allDocs
        .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
        .find(doc => doc.url === `/${slug.join('/')}`)
    : allDocs.find(doc => doc.url === '/index');
  if (!doc) return notFound();

  return <MDX doc={doc} />;
};

export default DocPage;
