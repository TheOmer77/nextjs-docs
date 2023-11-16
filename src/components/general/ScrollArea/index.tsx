'use client';

import { forwardRef } from 'react';
import {
  ScrollArea as RadixScrollArea,
  ScrollAreaCorner,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
  type ScrollAreaViewportProps,
} from '@radix-ui/react-scroll-area';

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaViewportProps>(
  ({ className, children, ...props }, ref) => (
    <RadixScrollArea>
      <ScrollAreaViewport {...props} ref={ref} className={className}>
        {children}
      </ScrollAreaViewport>
      <ScrollAreaScrollbar
        className='flex touch-none select-none bg-transparent p-0.5
transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5
data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        orientation='vertical'
      >
        <ScrollAreaThumb
          className="relative flex-1 rounded-lg bg-neutral-400 before:absolute
before:left-1/2 before:top-1/2  before:h-full before:min-h-[44px] before:w-full
before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2
before:content-[''] hover:bg-neutral-600 dark:bg-neutral-600
dark:hover:bg-neutral-400"
        />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar
        className='flex touch-none select-none bg-transparent p-0.5
transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5
data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col'
        orientation='horizontal'
      >
        <ScrollAreaThumb
          className="relative flex-1 rounded-lg bg-neutral-400 before:absolute
before:left-1/2 before:top-1/2  before:h-full before:min-h-[44px] before:w-full
before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2
before:content-[''] hover:bg-neutral-600 dark:bg-neutral-600
dark:hover:bg-neutral-400"
        />
      </ScrollAreaScrollbar>
      <ScrollAreaCorner className='bg-transparent' />
    </RadixScrollArea>
  )
);
ScrollArea.displayName = 'ScrollArea';
