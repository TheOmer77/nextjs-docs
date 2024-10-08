'use client';

import {
  Children,
  forwardRef,
  useRef,
  type ComponentPropsWithoutRef,
} from 'react';
import { RovingFocusGroupItem } from '@radix-ui/react-roving-focus';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/cn';

import {
  LIST_ITEM_NAME,
  useListContext,
  useRovingFocusGroupScope,
  type ScopedProps,
} from './common';

export type ListItemProps = ScopedProps<ComponentPropsWithoutRef<'button'>> & {
  asChild?: boolean;
};

export const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(
  ({ __scopeList, asChild, className, children, ...props }, ref) => {
    const context = useListContext(LIST_ITEM_NAME, __scopeList);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeList);
    const disabled = context.disabled || props.disabled;
    const rovingFocusItemRef = useRef<HTMLDivElement>(null);

    const ItemComp = asChild ? Slot : 'button';
    const itemButton = (
      <ItemComp
        {...props}
        ref={ref}
        disabled={disabled}
        className={cn(
          `data-[state=open]:bg-muted/30 disabled:text-muted flex min-h-12 w-full select-none items-center rounded-lg px-4 py-2 text-start text-base outline-none transition-[background-color] duration-100 state-layer focus-visible:outline-none focus-visible:state-layer-neutral-500/20 active:bg-neutral-500/20 active:duration-0 md:min-h-10 md:text-sm [&:not(:disabled)]:hover:state-layer-neutral-500/20 [&>*]:z-10`,
          className
        )}
      >
        {asChild
          ? children
          : Children.map(children, child =>
              typeof child === 'string' || typeof child === 'number' ? (
                <span>{child}</span>
              ) : (
                child
              )
            )}
      </ItemComp>
    );

    return (
      <li className='p-0'>
        {context.rovingFocus ? (
          <RovingFocusGroupItem
            asChild
            {...rovingFocusGroupScope}
            focusable={!disabled}
            ref={rovingFocusItemRef}
          >
            {itemButton}
          </RovingFocusGroupItem>
        ) : (
          itemButton
        )}
      </li>
    );
  }
);
ListItem.displayName = LIST_ITEM_NAME;
