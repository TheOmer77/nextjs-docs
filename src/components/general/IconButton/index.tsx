import React, {
  Children,
  forwardRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { cn } from 'utils';

const IconButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<'button'>
>(({ className, children, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={cn(
        `className='ms-4 flex h-10 w-10 select-none items-center justify-center
rounded-lg text-xl text-neutral-700 state-layer
hover:state-layer-neutral-500/20 focus-visible:outline-none
focus-visible:state-layer-neutral-500/20 active:state-layer-neutral-500/30
dark:text-neutral-300 md:hidden`,
        className
      )}
    >
      {Children.only(children)}
    </button>
  );
});
IconButton.displayName = 'IconButton';

export default IconButton;
