import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import { cn } from 'utils';
import { config } from 'contentlayer/generated';

export type HeaderProps = ComponentPropsWithoutRef<'header'> & {
  linkToHome?: boolean;
};

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ linkToHome = false, className, ...props }, ref) => (
    <header
      {...props}
      ref={ref}
      className={cn(
        `p-4 text-2xl font-bold tracking-tight text-primary-main md:w-80`,
        className
      )}
    >
      {linkToHome ? <Link href='/'>{config.title}</Link> : config.title}
    </header>
  )
);
Header.displayName = 'Header';
