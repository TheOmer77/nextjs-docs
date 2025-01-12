'use client';

import type { ComponentPropsWithRef } from 'react';
import { CheckboxItem, ItemIndicator } from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: ComponentPropsWithRef<typeof CheckboxItem>) => (
  <CheckboxItem
    className={cn(
      'relative flex h-10 w-full cursor-default select-none items-center rounded-sm pe-2 ps-8 text-base outline-none transition-[background-color] duration-100 state-layer focus:state-layer-muted/30 active:bg-muted/30 active:duration-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 md:h-8 md:text-sm [&>*]:z-10',
      className
    )}
    checked={checked}
    {...props}
  >
    <ItemIndicator className='absolute start-2.5'>
      <CheckIcon />
    </ItemIndicator>
    <span>{children}</span>
  </CheckboxItem>
);
