'use client';

import type { ComponentPropsWithRef } from 'react';
import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

export const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ComponentPropsWithRef<typeof SubTrigger> & { inset?: boolean }) => (
  <SubTrigger
    className={cn(
      'relative flex h-10 w-full cursor-default select-none items-center rounded-sm px-2 text-base outline-none transition-[background-color] duration-100 state-layer focus:state-layer-muted/30 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 md:h-8 md:text-sm [&:not([data-state=open])]:active:bg-muted/30 [&:not([data-state=open])]:active:duration-0 [&>*]:z-10',
      inset && 'ps-8',
      className
    )}
    {...props}
  >
    {children}
    <ChevronRightIcon className='ms-auto' />
  </SubTrigger>
);
