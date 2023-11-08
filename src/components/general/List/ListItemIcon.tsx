import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';
import { cn } from 'utils';

export const ListItemIcon = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(({ children, className, ...props }, ref) => {
  return (
    <Primitive.svg
      {...props}
      ref={ref}
      asChild
      className={cn(
        `me-4 text-xl text-neutral-600 dark:text-neutral-400
print:text-neutral-600`,
        className
      )}
    >
      {children}
    </Primitive.svg>
  );
});
ListItemIcon.displayName = 'ListItemIcon';
