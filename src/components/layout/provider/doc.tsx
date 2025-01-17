'use client';

import { createContext, type PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import { allDocs, notFoundPageName, specialFileNames } from '@/constants/docs';
import type { Doc } from '@/types/docs';

export const DocContext = createContext<Doc | null>(null);

export const DocProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const currentDoc = allDocs
      .filter(doc => !specialFileNames.includes(doc._meta.path))
      .find(doc => doc.url === pathname),
    notFoundDoc = allDocs.find(doc => doc._meta.path === notFoundPageName);
  const doc = currentDoc || notFoundDoc || null;

  return <DocContext.Provider value={doc}>{children}</DocContext.Provider>;
};
