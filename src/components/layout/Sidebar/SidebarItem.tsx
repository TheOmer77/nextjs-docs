'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from 'utils';

import { type Doc, allDocs } from 'contentlayer/generated';
import {
  Collapsible,
  ListItem,
  ListItemIcon,
  ListItemText,
} from 'components/general';
import { ChevronRightIcon } from 'assets/icons';

const SidebarItem = ({ doc, onClick }: { doc: Doc; onClick?: () => void }) => {
  const pathname = usePathname();

  const children = useMemo(
    () =>
      allDocs.filter(childDoc =>
        childDoc._raw.flattenedPath.startsWith(`${doc._raw.flattenedPath}/`)
      ),
    [doc._raw.flattenedPath]
  );

  const isActive = useMemo(() => doc.url === pathname, [doc, pathname]),
    isChildActive = useMemo(
      () => children.some(childDoc => childDoc.url === pathname),
      [children, pathname]
    );

  // TODO: Categories??
  /* 
  children.length > 0 ? (
    // Item is a category
    <li className={styles.category}>
      <details open={isActive || isChildActive}>
        <summary className={styles.button}>
          {doc.title}
          <ChevronRightIcon />
        </summary>
        <ul className={styles.list}>
          {children.map(childDoc => (
            <SidebarItem key={childDoc._id} doc={childDoc} />
          ))}
        </ul>
      </details>
    </li>
  )
  */

  return (
    <>
      <ListItem
        asChild
        key={doc._id}
        aria-current={isActive ? 'page' : undefined}
        onClick={onClick}
      >
        <Link href={doc.url}>
          <ListItemText primary={doc.title} />
          {children.length > 0 && (
            <ListItemIcon
              className={cn(
                'transition-transform',
                (isActive || isChildActive) && 'rotate-90'
              )}
            >
              <ChevronRightIcon />
            </ListItemIcon>
          )}
        </Link>
      </ListItem>
      {children.length > 0 && (
        <Collapsible open={isActive || isChildActive} className='ps-4'>
          {children.map(childDoc => (
            <SidebarItem key={childDoc._id} doc={childDoc} />
          ))}
        </Collapsible>
      )}
    </>
  );
};

export default SidebarItem;
