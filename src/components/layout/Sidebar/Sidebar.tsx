'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';

import SidebarItem from './SidebarItem';
import { Header } from '../Header';
import { Collapsible, List, ScrollArea, Sheet } from 'components/general';

export interface SidebarProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const filteredDocs = allDocs
  .filter(doc => doc._raw.flattenedPath.split('/').length < 2)
  .sort((a, b) => (a._raw.flattenedPath > b._raw.flattenedPath ? 1 : -1));

export const Sidebar = ({ open = false, onOpenChange }: SidebarProps) => {
  const pathname = usePathname();

  const listItems = filteredDocs.map(doc => {
    const children = allDocs.filter(childDoc =>
      childDoc._raw.flattenedPath.startsWith(`${doc._raw.flattenedPath}/`)
    );
    const isActive = doc.url === pathname,
      isChildActive = children.some(childDoc => childDoc.url === pathname);

    return (
      <Fragment key={doc._id}>
        <SidebarItem
          doc={doc}
          active={isActive}
          childActive={isChildActive}
          onClick={() => onOpenChange?.(false)}
        />
        {children.length > 0 && (
          <Collapsible open={isActive || isChildActive} className='ps-4'>
            {children.map(childDoc => (
              <SidebarItem
                key={childDoc._id}
                doc={childDoc}
                active={childDoc.url === pathname}
                onClick={() => onOpenChange?.(false)}
              />
            ))}
          </Collapsible>
        )}
      </Fragment>
    );
  });

  return (
    <>
      <aside
        className='fixed hidden h-screen w-80 select-none flex-col bg-neutral-50
pt-16 after:absolute after:end-0 after:top-0 after:-z-10 after:h-inherit
after:w-screen after:bg-inherit dark:bg-neutral-900 md:flex'
      >
        <List>{listItems}</List>
      </aside>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <Header />
        <ScrollArea
          className='flex max-h-[calc(100dvh-4rem)] flex-col gap-px
overflow-y-auto rounded-lg'
        >
          <List className='px-2 pb-2'>{listItems}</List>
        </ScrollArea>
      </Sheet>
    </>
  );
};
