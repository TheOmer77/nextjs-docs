'use client';

import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { List } from '@/components/ui/list';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useModal } from '@/hooks/use-modal';
import { source } from '@/lib/source';
import { notFoundPageName, specialFileNames } from '@/constants/docs';

import { SidebarItem } from './sidebar-item';
import { Logo } from '../logo';

const SidebarItems = () => {
  const filteredItems = source.pageTree.children.filter(item => {
    if (item.type === 'separator') return true;
    const url = item.type === 'folder' ? item.index?.url : item.url,
      filename = url?.slice(1).split('/').at(-1);
    return (!filename || !specialFileNames.includes(filename)) && item.name;
  });

  return (
    <ScrollArea className='flex max-h-[calc(100dvh-4rem)] flex-col gap-px overflow-y-auto rounded-lg'>
      <List className='px-2 pb-2'>
        {filteredItems.map((item, idx) => (
          <SidebarItem key={`${idx}-${item.name}`} node={item} />
        ))}
      </List>
    </ScrollArea>
  );
};

const SidebarContent = () => {
  const pathname = usePathname();
  const { currentModal, closeModal } = useModal();

  const handleOpenChange = (open: boolean) => !open && closeModal();

  const currentDoc = source.getPage(pathname.slice(1).split('/')),
    notFoundDoc = source.getPage([notFoundPageName]);

  return (
    <>
      {(currentDoc || notFoundDoc)?.data.showSidebar && (
        <aside className='fixed hidden h-screen w-80 select-none flex-col bg-card pt-16 after:absolute after:end-0 after:top-0 after:-z-10 after:h-inherit after:w-screen after:bg-inherit md:flex [&_[data-sidebar-subheader]]:bg-card'>
          <SidebarItems />
        </aside>
      )}
      <Drawer
        open={currentModal === 'nav-drawer'}
        onOpenChange={handleOpenChange}
        direction='left'
      >
        <DrawerContent aria-describedby={undefined}>
          <DrawerTitle className='sr-only'>Navigation drawer</DrawerTitle>
          <Logo />
          <SidebarItems />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export const Sidebar = () => (
  <Suspense>
    <SidebarContent />
  </Suspense>
);
