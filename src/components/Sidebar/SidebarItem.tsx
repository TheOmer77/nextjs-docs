import { useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import type { NavItem } from './types';
import styles from './index.module.scss';

const SidebarItem = ({ item }: { item: NavItem }) => {
  const router = useRouter();
  const isActive = useMemo(
    () => 'href' in item && item.href === router.asPath,
    [item, router.asPath]
  );

  return 'items' in item ? (
    // Item is a category
    <li className={styles.category}>
      <details>
        <summary className={styles.button}>
          {item.label}
          <ChevronRightIcon />
        </summary>
        <ul className={styles.list}>
          {item.items.map(item => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
      </details>
    </li>
  ) : (
    // Item is a link
    <li key={item.href}>
      <Link
        href={item.href}
        className={clsx(styles.button, isActive && styles.active)}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.label}
      </Link>
    </li>
  );
};

export default SidebarItem;
