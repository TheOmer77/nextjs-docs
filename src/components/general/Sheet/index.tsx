'use client';

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  type DialogProps,
} from '@radix-ui/react-dialog';
import { cn } from 'utils/cn';

export const Sheet = forwardRef<
  HTMLDivElement,
  Omit<DialogProps, 'modal'> & ComponentPropsWithoutRef<'div'>
>(({ open, defaultOpen, onOpenChange, className, children, ...props }, ref) => (
  <DialogRoot open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
    <DialogPortal>
      <DialogOverlay
        className='fixed inset-0 z-10 bg-black/40
data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in'
      />
      <DialogContent
        {...props}
        ref={ref}
        className={cn(
          `fixed start-0 top-0 z-20 h-screen max-h-screen w-80 max-w-md
rounded-e-lg bg-white shadow-lg shadow-black/10
[--slide-translate-origin-x:-100%] focus:outline-none
data-[state=closed]:animate-slide-out data-[state=open]:animate-slide-in
rtl:[--slide-translate-origin-x:100%] dark:bg-neutral-900`,
          className
        )}
      >
        {children}
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
));
Sheet.displayName = 'Sheet';
