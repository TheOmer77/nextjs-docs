import type { ComponentPropsWithoutRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/cn';

export const ListItemIcon = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Slot>) => (
  <Slot
    {...props}
    className={cn(
      'me-6 text-lg text-muted-foreground last:me-0 last:ms-auto md:me-4 md:text-base',
      className
    )}
  >
    {children}
  </Slot>
);
