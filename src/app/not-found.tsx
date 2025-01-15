import { ErrorLayout } from '@/components/layout/error';
import { MDX } from '@/components/layout/mdx';
import { Toc } from '@/components/layout/toc';
import { allDocs, config, notFoundPageName } from '@/constants/docs';

export const generateMetadata = () => {
  const doc = allDocs.find(doc => doc._meta.path === notFoundPageName);
  return {
    title: doc?.title
      ? config.titleTemplate.replace('%s', doc.title)
      : config.title,
  };
};

const NotFoundPage = () => {
  const doc = allDocs.find(doc => doc._meta.path === notFoundPageName);

  return doc ? (
    <>
      <MDX />
      {doc.showToc && <Toc />}
    </>
  ) : (
    <main className='py-8'>
      <ErrorLayout code={404} text='Not found' />;
    </main>
  );
};

export default NotFoundPage;
