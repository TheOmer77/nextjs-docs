import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';

export const NavLink = ({
  href,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'>) => {
  const LinkComp = href?.startsWith?.('/') ? Link : 'a';
  return (
    <Button
      asChild
      variant='flat'
      size='lg'
      icon
      className={cn('md:size-10', className)}
    >
      <LinkComp {...props} href={href as string}>
        {children}
      </LinkComp>
    </Button>
  );
};
