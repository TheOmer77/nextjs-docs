import { forwardRef, useEffect, useState } from 'react';
import {
  Root,
  CollapsibleContent,
  type CollapsibleContentProps,
} from '@radix-ui/react-collapsible';
import { Primitive } from '@radix-ui/react-primitive';

import { cn } from '@/lib/cn';

export interface CollapsibleProps extends CollapsibleContentProps {
  open?: boolean;
}

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ open = false, asChild, className, children, ...props }, ref) => {
    const content = (
      <Primitive.div
        asChild={asChild}
        className={cn(
          `overflow-hidden data-[state=closed]:animate-collapse-out
data-[state=open]:animate-collapse-in`,
          className
        )}
      >
        {children}
      </Primitive.div>
    );

    const [isSSR, setIsSSR] = useState(true);
    useEffect(() => {
      setIsSSR(false);
    }, []);

    return !isSSR ? (
      <Root asChild open={open}>
        <CollapsibleContent {...props} asChild ref={ref}>
          {content}
        </CollapsibleContent>
      </Root>
    ) : (
      open && content
    );
  }
);
Collapsible.displayName = 'Collapsible';
