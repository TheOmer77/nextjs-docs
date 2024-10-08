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
      `overflow-hidden text-neutral-800 dark:text-neutral-200
[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5
[&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium
[&_[cmdk-group-heading]]:text-neutral-600
dark:[&_[cmdk-group-heading]]:text-neutral-400`,
      className
    )}
    {...props}
  />
));
SearchGroup.displayName = 'SearchGroup';
