'use client';

import type { ComponentPropsWithRef } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/cn';

export const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: ComponentPropsWithRef<typeof Item> & { inset?: boolean }) => (
  <Item
    className={cn(
      'relative flex h-10 w-full cursor-default select-none items-center rounded-sm px-2 text-base outline-none transition-[background-color] duration-100 state-layer focus:state-layer-muted/30 active:bg-muted/30 active:duration-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 md:h-8 md:text-sm [&>*]:z-10',
      inset && 'ps-8',
      className
    )}
    {...props}
  />
);
