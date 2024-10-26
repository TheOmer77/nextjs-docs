import { notFound } from 'next/navigation';

import { MDX } from '@/components/layout/mdx';
import { allDocs, config } from '@/constants/contentlayer';

export const generateMetadata = () => {
  const doc = allDocs.find(doc => doc.url === '/');
  return {
    title: doc?.title
      ? config.titleTemplate.replace('%s', doc.title)
      : config.title,
  };
};

const HomePage = () => {
  const doc = allDocs.find(doc => doc.url === '/');
  if (!doc) return notFound();

  return <MDX doc={doc} />;
};

export default HomePage;
