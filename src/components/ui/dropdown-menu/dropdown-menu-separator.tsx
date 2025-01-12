'use client';

import type { ComponentPropsWithRef } from 'react';
import { Separator } from '@radix-ui/react-dropdown-menu';

import { cn } from '@/lib/cn';

export const DropdownMenuSeparator = ({
  className,
  ...props
}: ComponentPropsWithRef<typeof Separator>) => (
  <Separator className={cn('-mx-1 my-1 h-px bg-muted', className)} {...props} />
);
