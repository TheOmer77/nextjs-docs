import { Children, forwardRef, type ElementRef } from 'react';

import { cn } from '@/lib/cn';

import { Button, type ButtonProps } from '../button';

export const IconButton = forwardRef<ElementRef<typeof Button>, ButtonProps>(
  ({ children, className, ...props }, ref) => (
    <Button
      {...props}
      variant='flat'
      ref={ref}
      className={cn('aspect-square p-0', className)}
    >
      {children && Children.only(children)}
    </Button>
  )
);
IconButton.displayName = 'IconButton';
