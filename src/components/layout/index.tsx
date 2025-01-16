'use client';

import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/cn';

import { Nav } from './nav';
import { Sidebar } from './sidebar';
import { useDoc } from './provider/doc';

const Layout = ({ children }: PropsWithChildren) => {
  const doc = useDoc();

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
