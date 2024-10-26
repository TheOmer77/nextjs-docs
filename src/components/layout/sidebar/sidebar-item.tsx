'use client';

import { useMemo } from 'react';
import { ChevronRightIcon } from 'lucide-react';

import { ListItem, ListItemIcon, ListItemText } from '@/components/ui/list';
import { cn } from '@/lib/cn';
import { allDocs } from '@/constants/docs';
import type { Doc } from '@/types';

import { SidebarLink } from './sidebar-link';

type SidebarItemProps = {
  doc: Doc;
  active?: boolean;
  childActive?: boolean;
};

export const SidebarItem = ({
  doc,
  active = false,
  childActive = false,
}: SidebarItemProps) => {
  const children = useMemo(
    () =>
      allDocs.filter(childDoc =>
        childDoc._meta.path.startsWith(`${doc._meta.path}/`)
      ),
    [doc._meta.path]
  );

  return (
    <ListItem asChild key={doc._id} aria-current={active ? 'page' : undefined}>
      <SidebarLink href={doc.url}>
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
      </SidebarLink>
    </ListItem>
  );
};
