'use client';

import { createContext, type PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import { allDocs } from '@/constants/docs';
import type { Doc } from '@/types/docs';

export const DocContext = createContext<Doc | null>(null);

export const DocProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const doc = allDocs.find(doc => doc.url === pathname) || null;

  return <DocContext.Provider value={doc}>{children}</DocContext.Provider>;
};
