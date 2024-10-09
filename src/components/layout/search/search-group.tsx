import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { CommandGroup as Group } from 'cmdk';

import { cn } from '@/lib/cn';

export const SearchGroup = forwardRef<
  ElementRef<typeof Group>,
  ComponentPropsWithoutRef<typeof Group>
>(({ className, ...props }, ref) => (
  <Group
    ref={ref}
    className={cn(
      'overflow-hidden text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className
    )}
    {...props}
  />
));
SearchGroup.displayName = 'SearchGroup';
