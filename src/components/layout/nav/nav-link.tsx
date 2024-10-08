import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const NavLink = ({
  href,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'>) => {
  const LinkComp = href?.startsWith?.('/') ? Link : 'a';
  return (
    <Button asChild variant='flat' icon className={className}>
      <LinkComp {...props} href={href as string}>
        {children}
      </LinkComp>
    </Button>
  );
};
