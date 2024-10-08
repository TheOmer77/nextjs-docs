import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/cn';

export type ListItemTextProps = ComponentPropsWithoutRef<'div'> & {
  primary: ReactNode;
  secondary: ReactNode;
};

export const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ primary, secondary, className, ...props }, ref) => (
    <div {...props} ref={ref} className={cn(`flex flex-col`, className)}>
      {primary && (
        <span className='text-foreground flex flex-row items-center gap-1 text-base md:text-sm'>
          {primary}
        </span>
      )}
      {secondary && (
        <span className='text-muted-foreground text-sm md:text-xs'>
          {secondary}
        </span>
      )}
    </div>
  )
);
ListItemText.displayName = 'ListItemText';
