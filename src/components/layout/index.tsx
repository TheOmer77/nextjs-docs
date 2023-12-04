'use client';

import { useState, type PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import { Nav } from './Nav';
import { Sidebar } from './Sidebar';
import { cn } from 'utils';
import { allDocs, notFoundPageName } from 'constants/contentlayer';

const Layout = ({ children }: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const currentDoc = allDocs.find(
    doc => doc.url === pathname || doc._raw.flattenedPath === notFoundPageName
  );

  return (
    <>
      <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
      <Nav onMenuClick={() => setSidebarOpen(true)} />

      <main
        className={cn(
          'grow px-4 pt-16',
          currentDoc?.displaySidebar && 'md:ps-[21rem]'
        )}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
