import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils';

export const NavHeader = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'header'>
>(({ className, ...props }, ref) => (
  <header
    {...props}
    ref={ref}
    className={cn(
      `p-4 text-2xl font-bold text-primary-main md:w-80`,
      className
    )}
  >
    Docs site
  </header>
));
NavHeader.displayName = 'NavHeader';
