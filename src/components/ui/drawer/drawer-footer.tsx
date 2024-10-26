import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

import { cn } from '@/lib/cn';

export const DrawerFooter = forwardRef<
  ElementRef<'div'>,
  ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    {...props}
    ref={ref}
    className={cn('mt-auto flex flex-col gap-2 p-4', className)}
  />
));
DrawerFooter.displayName = 'DrawerFooter';
