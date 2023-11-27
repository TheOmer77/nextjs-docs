import { forwardRef } from 'react';
import {
  Root,
  CollapsibleContent,
  type CollapsibleContentProps,
} from '@radix-ui/react-collapsible';
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from 'utils';

export interface CollapsibleProps extends CollapsibleContentProps {
  open?: boolean;
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ open = false, asChild, className, children, ...props }, ref) => {
    return (
      <Root asChild open={open}>
        <CollapsibleContent
          {...props}
          asChild
          ref={ref}
          className={cn(
            `overflow-hidden data-[state=closed]:animate-collapse-out
data-[state=open]:animate-collapse-in`,
            className
          )}
        >
          <Primitive.div asChild={asChild}>{children}</Primitive.div>
        </CollapsibleContent>
      </Root>
    );
  }
);
Collapsible.displayName = 'Collapsible';
