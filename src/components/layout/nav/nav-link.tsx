import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import { IconButton } from '@/components/ui';

export const NavLink = ({
  href,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'>) => {
  const LinkComp = href?.startsWith?.('/') ? Link : 'a';
  return (
    <IconButton asChild className={className}>
      <LinkComp {...props} href={href as string}>
        {children}
      </LinkComp>
    </IconButton>
  );
};
