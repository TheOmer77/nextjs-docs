import { notFound } from 'next/navigation';
import Link from 'fumadocs-core/link';
import type { MDXComponents } from 'mdx/types';

import { ErrorLayout } from '@/components/layout/error';
import { HomeLayout } from '@/components/layout/home';
import { Alert, MdxBlockquote } from '@/components/layout/mdx';
import { cn } from '@/lib/cn';
import { source } from '@/lib/source';

const mdxComponents = {
  a: Link,
  blockquote: MdxBlockquote,
  Alert,

  HomeLayout,
  ErrorLayout,
} satisfies MDXComponents;

export const generateStaticParams = async () => source.generateParams();

export const generateMetadata = async (props: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const { title, description } = page.data;
  return { title, description };
};

const NotFoundPage = async () => {
  const page = source.getPage(['_not-found']);
  if (!page)
    return (
      <div className='py-8'>
        <ErrorLayout code={404} text='Not found' />;
      </div>
    );

  const { body: MDX, title, showSidebar, showTitle } = page.data;

  return (
    <div
      className={cn(
        'prose mx-auto w-[calc(100vw-2rem)] max-w-8xl py-8 dark:prose-invert',
        showSidebar && 'md:max-w-[calc(100vw-22rem)] lg:max-w-3xl'
      )}
    >
      {title && showTitle && (
        <h1 className='text-5xl font-extrabold tracking-tight sm:text-[3.5rem]'>
          {title}
        </h1>
      )}
      <main>
        <MDX components={mdxComponents} />
      </main>
    </div>
  );
};

export default NotFoundPage;
