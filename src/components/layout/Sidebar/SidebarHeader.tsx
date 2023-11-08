import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils';

export const SidebarHeader = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'header'>
>(({ className, ...props }, ref) => (
  <header
    {...props}
    ref={ref}
    className={cn(`p-4 text-2xl font-bold text-primary-main`, className)}
  >
    <h1>Docs site</h1>
  </header>
));
SidebarHeader.displayName = 'SidebarHeader';
