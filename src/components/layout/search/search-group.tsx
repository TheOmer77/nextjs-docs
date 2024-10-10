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
      'overflow-hidden text-foreground [&_[cmdk-group-heading]]:p-2 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground md:[&_[cmdk-group-heading]]:text-xs',
      className
    )}
    {...props}
  />
));
SearchGroup.displayName = 'SearchGroup';
