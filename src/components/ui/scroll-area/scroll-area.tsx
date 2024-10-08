'use client';

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import {
  ScrollArea as ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaCorner,
} from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/cn';

import { ScrollBar } from './scroll-bar';

export const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaRoot>,
  ComponentPropsWithoutRef<typeof ScrollAreaRoot>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaRoot
    {...props}
    ref={ref}
    className={cn('relative overflow-hidden [direction:inherit]', className)}
  >
    <ScrollAreaViewport className='h-full w-full rounded-[inherit]'>
      {children}
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
));
ScrollArea.displayName = ScrollAreaRoot.displayName;
