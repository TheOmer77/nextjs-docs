import React, {
  Children,
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from '@/lib/cn';

export const IconButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof Primitive.button>
>(({ className, children, ...props }, ref) => <Primitive.button
      {...props}
      ref={ref}
      className={cn(
        `flex h-10 w-10 select-none items-center justify-center rounded-lg
text-xl text-neutral-700 duration-200 state-layer
hover:state-layer-neutral-500/10 focus-visible:outline-none
focus-visible:state-layer-neutral-500/20 active:bg-neutral-500/20
active:duration-0 dark:text-neutral-300`,
        className
      )}
    >
      {Children.only(children)}
    </Primitive.button>);
IconButton.displayName = 'IconButton';
