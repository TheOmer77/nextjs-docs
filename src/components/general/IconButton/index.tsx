import React, {
  Children,
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { cn } from 'utils';

export const IconButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>(({ className, children, ...props }, ref) => {
  return (
    <button
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
    </button>
  );
});
IconButton.displayName = 'IconButton';
