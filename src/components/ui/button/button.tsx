import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';

import { buttonVariants } from './variants';

export type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, icon, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
