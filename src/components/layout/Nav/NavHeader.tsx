import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils';

export const NavHeader = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'header'>
>(({ className, ...props }, ref) => (
  <header
    {...props}
    ref={ref}
    className={cn(`w-80 p-4 text-2xl font-bold text-primary-main`, className)}
  >
    Docs site
  </header>
));
NavHeader.displayName = 'NavHeader';
