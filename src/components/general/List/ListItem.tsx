'use client';

import { forwardRef, useRef, type ComponentPropsWithoutRef } from 'react';
import { RovingFocusGroupItem } from '@radix-ui/react-roving-focus';
import { Primitive } from '@radix-ui/react-primitive';

import {
  LIST_ITEM_NAME,
  useListContext,
  useRovingFocusGroupScope,
  type ScopedProps,
} from './common';
import { cn } from 'utils';

// eslint-disable-next-line react/display-name
const ListItemButton = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof Primitive.button>
>(({ asChild, className, ...props }, ref) => (
  <Primitive.button
    {...props}
    ref={ref}
    asChild={asChild}
    className={cn(
      `flex min-h-[2.5rem] w-full cursor-default select-none items-center
rounded-lg px-4 py-2 text-start text-sm outline-none transition-[background-color]
state-layer hover:state-layer-neutral-500/20 focus-visible:outline-none
focus-visible:state-layer-neutral-500/20 active:state-layer-neutral-500/30
disabled:text-neutral-600 dark:disabled:text-neutral-400`,
      className
    )}
  />
));

export const ListItem = forwardRef<
  HTMLButtonElement,
  ScopedProps<ComponentPropsWithoutRef<typeof Primitive.button>>
>(({ __scopeList, ...props }, ref) => {
  const context = useListContext(LIST_ITEM_NAME, __scopeList);
  const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeList);
  const disabled = context.disabled || props.disabled;
  const rovingFocusItemRef = useRef<HTMLDivElement>(null);

  return (
    <li className='p-0'>
      {context.rovingFocus ? (
        <RovingFocusGroupItem
          asChild
          {...rovingFocusGroupScope}
          focusable={!disabled}
          ref={rovingFocusItemRef}
        >
          <ListItemButton {...props} ref={ref} disabled={disabled} />
        </RovingFocusGroupItem>
      ) : (
        <ListItemButton {...props} ref={ref} disabled={disabled} />
      )}
    </li>
  );
});
ListItem.displayName = LIST_ITEM_NAME;
