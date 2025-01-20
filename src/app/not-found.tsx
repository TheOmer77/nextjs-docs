import { config } from '@/constants/docs';

export const generateMetadata = () => ({
  title: config.titleTemplate.replace('%s', 'Not found'),
});

const NotFoundPage = () => (
  <main className='flex min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-center'>
    <h1 className='m-0 text-9xl font-extrabold leading-none tracking-tight text-danger-800 sm:text-[16rem] md:text-[12rem] lg:text-[16rem] dark:text-danger-200'>
      404
    </h1>
    <p className='m-0 text-center text-xl text-muted-foreground'>
      I&apos;m not sure what you were looking for, but it&apos;s not here.
    </p>
  </main>
);

export default NotFoundPage;
