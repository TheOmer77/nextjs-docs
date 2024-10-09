import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from '@/lib/cn';

export const ListItemIcon = forwardRef<
  SVGSVGElement,
  ComponentPropsWithoutRef<'svg'>
>(({ children, className, ...props }, ref) => (
  <Primitive.svg
    {...props}
    ref={ref}
    asChild
    className={cn(
      'me-6 text-lg text-muted-foreground last:me-0 last:ms-auto md:me-4 md:text-base',
      className
    )}
  >
    {children}
  </Primitive.svg>
));
ListItemIcon.displayName = 'ListItemIcon';
