import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils';
import { config } from 'contentlayer/generated';

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
    {config.title}
  </header>
));
Header.displayName = 'Header';
