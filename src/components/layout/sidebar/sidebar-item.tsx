'use client';

import { useMemo, type ElementRef, type MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRightIcon } from 'lucide-react';

import { ListItem, ListItemIcon, ListItemText } from '@/components/ui/list';
import { useModal } from '@/hooks/use-modal';
import { cn } from '@/lib/cn';
import { allDocs } from '@/constants/contentlayer';

import type { Doc } from '@/types';

interface SidebarItemProps {
  doc: Doc;
  active?: boolean;
  childActive?: boolean;
}

export const SidebarItem = ({
  doc,
  active = false,
  childActive = false,
}: SidebarItemProps) => {
  const router = useRouter();
  const { currentModal, openModal } = useModal();

  const children = useMemo(
    () =>
      allDocs.filter(childDoc =>
        childDoc._raw.flattenedPath.startsWith(`${doc._raw.flattenedPath}/`)
      ),
    [doc._raw.flattenedPath]
  );

  const handleClick: MouseEventHandler<ElementRef<'a'>> = e => {
    if (!e.currentTarget) return;
    const pathname = e.currentTarget.pathname;
    e.preventDefault();

    // Same behavior as Next link
    if (!currentModal) return router.push(pathname);

    // First close drawer, then navigate
    openModal(null, 'replace');
    setTimeout(() => router.replace(pathname), 10);
  };

  return (
    <ListItem asChild key={doc._id} aria-current={active ? 'page' : undefined}>
      <a href={doc.url} onClick={handleClick}>
        <ListItemText primary={doc.title} />
        {children.length > 0 && (
          <ListItemIcon
            className={cn(
              'transition-transform duration-300',
              (active || childActive) && 'rotate-90'
            )}
          >
            <ChevronRightIcon />
          </ListItemIcon>
        )}
      </a>
    </ListItem>
  );
};
