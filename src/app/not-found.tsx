import { ErrorLayout } from '@/components/layout/error';
import { MDX } from '@/components/layout/mdx';
import { allDocs, config, notFoundPageName } from '@/constants/contentlayer';

export const generateMetadata = () => {
  const doc = allDocs.find(doc => doc._raw.flattenedPath === notFoundPageName);
  return {
    title: doc?.title
      ? config.titleTemplate.replace('%s', doc.title)
      : config.title,
  };
};

const NotFoundPage = () => {
  const doc = allDocs.find(doc => doc._raw.flattenedPath === notFoundPageName);

  return doc ? (
    <MDX doc={doc} />
  ) : (
    <div className='py-8'>
      <ErrorLayout code={404} text='Not found' />;
    </div>
  );
};

export default NotFoundPage;
