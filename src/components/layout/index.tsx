'use client';

import type { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';
import { allDocs, notFoundPageName, specialFileNames } from '@/constants/docs';

import { Nav } from './nav';
import { Sidebar } from './sidebar';

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const currentDoc = allDocs
      .filter(doc => !specialFileNames.includes(doc._meta.path))
      .find(doc => doc.url === pathname),
    notFoundDoc = allDocs.find(doc => doc._meta.path === notFoundPageName);
  const doc = currentDoc || notFoundDoc;

  return (
    <>
      <Nav />

      <div
        className={cn(
          'relative mx-auto grid max-w-8xl grow grid-cols-1 pt-16 xl:grid-cols-[1fr,var(--toc-width,0)] print:block print:grid-cols-1 print:p-0',
          doc?.showSidebar &&
            'md:grid-cols-[theme(spacing.80)_1fr] xl:grid-cols-[theme(spacing.80)_1fr,var(--toc-width,0)]',
          doc?.showToc && '[--toc-width:theme(spacing.72)]'
        )}
      >
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
