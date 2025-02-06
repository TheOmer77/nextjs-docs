'use client';

import type { PropsWithChildren } from 'react';

import { useDoc } from '@/hooks/use-doc';
import { cn } from '@/lib/cn';

import { Nav } from './nav';
import { Sidebar } from './sidebar';

const Layout = ({ children }: PropsWithChildren) => {
  const doc = useDoc();

  return (
    <>
      <Nav />

      <div
        className={cn(
          'relative mx-auto grid max-w-8xl grow grid-cols-1 pt-16 [--sidebar-width:theme(spacing.80)] xl:grid-cols-[1fr,var(--toc-width,0)] print:block print:grid-cols-1 print:p-0',
          doc?.showSidebar &&
            'md:grid-cols-[var(--sidebar-width,0)_1fr] xl:grid-cols-[var(--sidebar-width,0)_1fr,var(--toc-width,0)]',
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
