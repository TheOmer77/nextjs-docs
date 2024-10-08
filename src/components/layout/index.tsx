'use client';

import { useState, type PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import { Nav } from './Nav';
import { Sidebar } from './Sidebar';
import { cn } from 'lib/cn';
import {
  allDocs,
  notFoundPageName,
  specialFileNames,
} from 'constants/contentlayer';

const Layout = ({ children }: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const currentDoc = allDocs
      .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
      .find(doc => doc.url === pathname),
    notFoundDoc = allDocs.find(
      doc => doc._raw.flattenedPath === notFoundPageName
    );

  return (
    <>
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <Nav onMenuClick={() => setSidebarOpen(true)} />

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
