import { ErrorLayout } from '@/components/layout/error';
import { config } from '@/constants/docs';

export const generateMetadata = () => ({
  title: config.titleTemplate.replace('%s', 'Not found'),
});

const NotFoundPage = () => (
  <main className='py-8'>
    <ErrorLayout code={404} text='Not found' />;
  </main>
);

export default NotFoundPage;
