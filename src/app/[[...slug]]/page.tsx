import { notFound } from 'next/navigation';

import { mdxComponents } from '@/components/layout/mdx';
import { cn } from '@/lib/cn';
import { source } from '@/lib/source';
import { specialFileNames } from '@/constants/docs';
import { siteConfig } from '@/constants/site';

export const generateStaticParams = async () => source.generateParams();

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) => {
  const doc = source.getPage((await params).slug);
  return {
    title: doc?.data.title
      ? siteConfig.titleTemplate.replace('%s', doc.data.title)
      : siteConfig.title,
  };
};
const DocsPage = async (props: { params: Promise<{ slug?: string[] }> }) => {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page || specialFileNames.includes(page.file.name)) notFound();

  const { body: MDX, title, showSidebar, showTitle } = page.data;

  return (
    <div
      className={cn(
        'prose max-w-none grow px-4 pt-16 dark:prose-invert [&>*]:mx-auto [&>*]:w-full [&>*]:max-w-[calc(100vw-2rem)]',
        showSidebar && 'md:ps-[21rem] lg:[&>*]:max-w-3xl'
      )}
    >
      {showTitle && (
        <>
          <h1 className='text-5xl font-extrabold tracking-tight sm:text-[3.5rem]'>
            {title}
          </h1>
          {/* TODO: Description */}
        </>
      )}
      <main>
        <MDX components={mdxComponents} />
      </main>
    </div>
  );
};

export default DocsPage;
