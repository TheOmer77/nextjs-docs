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

  return (
    <div className='mx-auto flex max-w-8xl flex-row overflow-x-hidden print:block'>
      <Nav />
      <Sidebar />

      <div
        className={cn(
          'relative grow px-4 py-6 pt-16 print:block print:p-0',
          (currentDoc || notFoundDoc)?.showSidebar && 'md:ps-[21rem]',
          (currentDoc || notFoundDoc)?.showToc &&
            'xl:grid xl:grid-cols-[1fr_theme(spacing.72)]'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
