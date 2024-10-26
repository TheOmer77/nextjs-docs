import { Fragment } from 'react';
import { usePathname } from 'next/navigation';

import { Collapsible } from '@/components/ui/collapsible';
import { Drawer, DrawerContent, DrawerTitle } from '@/components/ui/drawer';
import { List, ListSubheader } from '@/components/ui/list';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useModal } from '@/hooks/use-modal';
import {
  allDocs,
  config,
  notFoundPageName,
  sidebarDocs,
  specialFileNames,
} from '@/constants/contentlayer';
import type { Doc } from '@/types';

import { SidebarItem } from './sidebar-item';
import { Logo } from '../logo';

const uncategorizedDocs = sidebarDocs.filter(
    doc =>
      typeof doc.category !== 'string' ||
      !Object.keys(config.categories).includes(doc.category)
  ),
  docsByCategory = {
    ...(uncategorizedDocs.length > 0 ? { _: uncategorizedDocs } : {}),
    ...Object.keys(config.categories).reduce(
      (obj, category) => ({
        ...obj,
        [category]: sidebarDocs.filter(doc => doc.category === category),
      }),
      {} as { [key: string]: Doc[] }
    ),
  };

const ListCategories = () => {
  const pathname = usePathname();
  return Object.keys(docsByCategory).map(category => {
    const categoryDocs =
      docsByCategory[category as keyof typeof docsByCategory];
    return (
      Array.isArray(categoryDocs) &&
      categoryDocs.length > 0 && (
        <Fragment key={category}>
          {category !== '_' && (
            <ListSubheader className='bg-popover' data-sidebar-subheader=''>
              {config.categories[category] || category}
            </ListSubheader>
          )}
          {docsByCategory[category as keyof typeof docsByCategory]?.map(doc => {
            const children = allDocs
              .filter(childDoc =>
                childDoc._raw.flattenedPath.startsWith(
                  `${doc._raw.flattenedPath}/`
                )
              )
              .sort((a, b) =>
                a._raw.flattenedPath > b._raw.flattenedPath ? 1 : -1
              );
            const isActive = doc.url === pathname,
              isChildActive = children.some(
                childDoc => childDoc.url === pathname
              );

            return (
              <Fragment key={doc._id}>
                <SidebarItem
                  doc={doc}
                  active={isActive}
                  childActive={isChildActive}
                />
                {children.length > 0 && (
                  <Collapsible
                    open={isActive || isChildActive}
                    className='flex w-full flex-col gap-px ps-4'
                  >
                    {children.map(childDoc => (
                      <SidebarItem
                        key={childDoc._id}
                        doc={childDoc}
                        active={childDoc.url === pathname}
                      />
                    ))}
                  </Collapsible>
                )}
              </Fragment>
            );
          })}
        </Fragment>
      )
    );
  });
};

export const Sidebar = () => {
  const pathname = usePathname();
  const { currentModal, closeModal } = useModal();

  const handleOpenChange = (open: boolean) => !open && closeModal();

  const currentDoc = allDocs
      .filter(doc => !specialFileNames.includes(doc._raw.flattenedPath))
      .find(doc => doc.url === pathname),
    notFoundDoc = allDocs.find(
      doc => doc._raw.flattenedPath === notFoundPageName
    );

  return (
    <>
      {(currentDoc || notFoundDoc)?.displaySidebar && (
        <aside className='fixed hidden h-screen w-80 select-none flex-col bg-card pt-16 after:absolute after:end-0 after:top-0 after:-z-10 after:h-inherit after:w-screen after:bg-inherit md:flex [&_[data-sidebar-subheader]]:bg-card'>
          <ScrollArea className='flex max-h-[calc(100dvh-4rem)] flex-col gap-px overflow-y-auto rounded-lg'>
            <List className='px-2 pb-2'>
              <ListCategories />
            </List>
          </ScrollArea>
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
          <ScrollArea className='flex max-h-[calc(100dvh-4rem)] flex-col gap-px overflow-y-auto rounded-lg'>
            <List className='px-2 pb-2'>
              <ListCategories />
            </List>
          </ScrollArea>
        </DrawerContent>
      </Drawer>
    </>
  );
};
