import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from 'components/layout/Mdx';

const HomePage = () => {
  const doc = allDocs.find(doc => doc.url === '/');
  if (!doc) return notFound();

  return <Mdx doc={doc} />;
};

export default HomePage;
