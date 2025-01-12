'use client';

import type { ComponentPropsWithRef } from 'react';
import { Label } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/cn';

export const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentPropsWithRef<typeof Label> & { inset?: boolean }) => (
  <Label
    className={cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'ps-8',
      className
    )}
    {...props}
  />
);
