'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ChevronRightIcon from 'assets/icons/chevron_right.svg';

import { type Doc, allDocs } from 'contentlayer/generated';
import { ListItem, ListItemText } from 'components/general/List';

const SidebarItem = ({ doc }: { doc: Doc }) => {
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
    <ListItem
      asChild
      key={doc._id}
      aria-current={isActive ? 'page' : undefined}
    >
      <Link href={doc.url}>
        <ListItemText primary={doc.title} />
      </Link>
    </ListItem>
  );
};

export default SidebarItem;
