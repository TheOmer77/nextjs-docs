import Link from 'next/link';
import { ArrowLeftIcon } from 'lucide-react';

import { config } from '@/constants/docs';

export const generateMetadata = () => ({
  title: config.titleTemplate.replace('%s', 'Not found'),
});

const NotFoundPage = () => (
  <main className='flex min-h-[calc(100dvh-theme(spacing.32))] w-full flex-col items-center justify-center px-4 text-center'>
    <h1 className='font-mono text-[min(calc(50dvw-1rem),25rem)] font-extrabold leading-none tracking-tighter text-muted-foreground/30'>
      404
    </h1>
    <p className='mb-8 leading-tight text-muted-foreground'>
      I&apos;m not sure what you were looking for... but it&apos;s not here.
    </p>
    <Link
      href='/'
      className='group flex flex-row items-center text-sm font-medium hover:underline'
    >
      <ArrowLeftIcon className='me-2 transition-transform group-hover:-translate-x-1' />
      Return home
    </Link>
  </main>
);

export default NotFoundPage;
