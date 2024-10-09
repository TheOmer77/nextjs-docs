import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { CommandItem } from 'cmdk';

import type { Doc } from '@/types';

export interface SearchItemProps
  extends ComponentPropsWithoutRef<typeof CommandItem> {
  doc: Doc;
  parentDoc?: Doc;
}

export const SearchItem = forwardRef<
  ElementRef<typeof CommandItem>,
  SearchItemProps
>(({ doc, parentDoc, ...props }, ref) => (
  <CommandItem
    ref={ref}
    className='relative min-h-10 cursor-default select-none items-start rounded-lg px-2 py-2.5 text-sm outline-none transition-colors duration-75 state-layer active:duration-0 aria-selected:state-layer-muted/30 aria-selected:active:bg-muted/30 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&>*]:z-10'
    {...props}
  >
    <span className='relative'>
      {parentDoc && (
        <>
          <span className='text-muted-foreground'>
            {parentDoc.title}
            <span className='mx-1'>/</span>
          </span>
        </>
      )}
      {doc.title}
    </span>
  </CommandItem>
));
SearchItem.displayName = 'SearchItem';
