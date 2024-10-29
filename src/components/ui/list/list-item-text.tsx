import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactNode,
} from 'react';

import { cn } from '@/lib/cn';

export type ListItemTextProps = ComponentPropsWithoutRef<'div'> & {
  primary: ReactNode;
  secondary?: ReactNode;
};

export const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ primary, secondary, className, ...props }, ref) => (
    <div {...props} ref={ref} className={cn(`flex flex-col`, className)}>
      {primary && (
        <span className='flex flex-row items-center gap-1 text-base text-foreground md:text-sm'>
          {primary}
        </span>
      )}
      {secondary && (
        <span className='text-sm text-muted-foreground md:text-xs'>
          {secondary}
        </span>
      )}
    </div>
  )
);
ListItemText.displayName = 'ListItemText';
