'use client';

import { type PropsWithChildren, Suspense } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';
import { allDocs, notFoundPageName, specialFileNames } from '@/constants/docs';

import { Nav } from './nav';
import { Sidebar } from './sidebar';

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();

  const currentDoc = allDocs
      .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
      .find(doc => doc.url === pathname),
    notFoundDoc = allDocs.find(
      doc => doc._raw.flattenedPath === notFoundPageName
    );

  return (
    <>
      <Suspense>
        <Sidebar />
        <Nav />
      </Suspense>

      <main
        className={cn(
          'grow px-4 pt-16',
          (currentDoc || notFoundDoc)?.displaySidebar && 'md:ps-[21rem]'
        )}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
