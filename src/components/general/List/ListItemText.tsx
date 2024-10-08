import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from 'lib/cn';

export interface ListItemTextProps extends ComponentPropsWithoutRef<'div'> {
  primary?: string;
  secondary?: string;
}

export const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ primary, secondary, className, ...props }, ref) => (
    <div {...props} ref={ref} className={cn(`flex flex-col`, className)}>
      {primary && (
        <span className='text-sm text-neutral-900 dark:text-neutral-100'>
          {primary}
        </span>
      )}
      {secondary && (
        <span className='text-sm text-neutral-700 dark:text-neutral-300'>
          {secondary}
        </span>
      )}
    </div>
  )
);
ListItemText.displayName = 'ListItemText';
