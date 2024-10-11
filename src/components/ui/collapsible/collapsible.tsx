import { forwardRef, useEffect, useState } from 'react';
import {
  Root,
  CollapsibleContent,
  type CollapsibleContentProps,
} from '@radix-ui/react-collapsible';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/cn';

export type CollapsibleProps = CollapsibleContentProps & { open?: boolean };

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ open = false, asChild, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    const content = (
      <Comp
        className={cn(
          `overflow-hidden data-[state=closed]:animate-collapse-out data-[state=open]:animate-collapse-in`,
          className
        )}
      >
        {children}
      </Comp>
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
