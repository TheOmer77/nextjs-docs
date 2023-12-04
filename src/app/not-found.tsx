import { ErrorLayout } from 'layouts';
import { allDocs, config } from 'constants/contentlayer';
import { Mdx } from 'components/layout/Mdx';

export const generateMetadata = () => {
  const doc = allDocs.find(doc => doc._raw.flattenedPath === '_not-found');
  return {
    title: doc?.title
      ? config.titleTemplate.replace('%s', doc.title)
      : config.title,
  };
};

const NotFoundPage = () => {
  const doc = allDocs.find(doc => doc._raw.flattenedPath === '_not-found');

  return doc ? (
    <Mdx doc={doc} />
  ) : (
    <div className='py-8'>
      <ErrorLayout code={404} text='Not found' />;
    </div>
  );
};

export default NotFoundPage;
