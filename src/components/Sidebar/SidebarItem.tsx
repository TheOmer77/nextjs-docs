'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import ChevronRightIcon from 'assets/icons/chevron_right.svg';

import { type Doc, allDocs } from 'contentlayer/generated';
import styles from './index.module.scss';

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

  return children.length > 0 ? (
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
  ) : (
    // Item is a link
    <li key={doc._id}>
      <Link
        href={doc.url}
        className={clsx(styles.button, isActive && styles.active)}
        aria-current={isActive ? 'page' : undefined}
      >
        {doc.title}
      </Link>
    </li>
  );
};

export default SidebarItem;
