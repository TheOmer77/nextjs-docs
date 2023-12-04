import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

import { cn } from 'utils';
import { config } from 'constants/contentlayer';

export const Header = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'header'>
>(({ className, ...props }, ref) => (
  <header
    {...props}
    ref={ref}
    className={cn(
      `p-4 text-2xl font-bold tracking-tight text-primary-main md:w-80`,
      className
    )}
  >
    <Link href='/'>{config.title}</Link>
  </header>
));
Header.displayName = 'Header';
