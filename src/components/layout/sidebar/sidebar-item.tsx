'use client';

import { useMemo, type ElementRef, type MouseEventHandler } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import { ListItem, ListItemIcon, ListItemText } from '@/components/ui/list';
import { cn } from '@/lib/cn';
import { allDocs } from '@/constants/contentlayer';

import type { Doc } from '@/types';

interface SidebarItemProps {
  doc: Doc;
  active?: boolean;
  childActive?: boolean;
  onClick?: MouseEventHandler<ElementRef<'a'>>;
}

export const SidebarItem = ({
  doc,
  active = false,
  childActive = false,
  onClick,
}: SidebarItemProps) => {
  const children = useMemo(
    () =>
      allDocs.filter(childDoc =>
        childDoc._raw.flattenedPath.startsWith(`${doc._raw.flattenedPath}/`)
      ),
    [doc._raw.flattenedPath]
  );

  return (
    <ListItem asChild key={doc._id} aria-current={active ? 'page' : undefined}>
      <a href={doc.url} onClick={onClick}>
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
