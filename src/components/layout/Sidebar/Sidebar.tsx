'use client';

import { allDocs } from 'contentlayer/generated';

import SidebarItem from './SidebarItem';
import { Header } from '../Header';
import { List, ScrollArea, Sheet } from 'components/general';

export interface SidebarProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const Sidebar = ({ open = false, onOpenChange }: SidebarProps) => (
  <>
    <aside
      className='fixed hidden h-screen w-80 select-none flex-col bg-neutral-50
pt-16 after:absolute after:end-0 after:top-0 after:-z-10 after:h-inherit
after:w-screen after:bg-inherit dark:bg-neutral-900 md:flex'
    >
      <List>
        {allDocs
          .filter(doc => doc._raw.flattenedPath.split('/').length < 2)
          .map(doc => (
            <SidebarItem key={doc._id} doc={doc} />
          ))}
      </List>
    </aside>
    <Sheet open={open} onOpenChange={onOpenChange}>
      <Header />
      <List className='px-2'>
        <ScrollArea
          className='flex max-h-[calc(100vh-4rem)] flex-col gap-px
overflow-y-auto rounded-lg'
        >
          {allDocs
            .filter(doc => doc._raw.flattenedPath.split('/').length < 2)
            .map(doc => (
              <SidebarItem
                key={doc._id}
                doc={doc}
                onClick={() => onOpenChange?.(false)}
              />
            ))}
        </ScrollArea>
      </List>
    </Sheet>
  </>
);
