import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import {
  ScrollAreaScrollbar,
  ScrollAreaThumb,
} from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/cn';

export const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, style, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    // Override default style, which takes priority over classnames
    style={{ left: 'auto', right: 'auto', insetInlineEnd: 0, ...style }}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' &&
        'h-full w-3 border-l border-l-transparent p-0.5',
      orientation === 'horizontal' &&
        'h-3 flex-col border-t border-t-transparent p-0.5',
      className
    )}
    {...props}
  >
    <ScrollAreaThumb
      className='relative z-50 flex-1 rounded-full bg-neutral-200
hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700'
    />
  </ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaScrollbar.displayName;
