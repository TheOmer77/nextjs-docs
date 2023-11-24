import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { CommandItem } from 'cmdk';

import type { Doc } from 'contentlayer/generated';

export interface SearchItemProps
  extends ComponentPropsWithoutRef<typeof CommandItem> {
  doc: Doc;
}

export const SearchItem = forwardRef<
  ElementRef<typeof CommandItem>,
  SearchItemProps
>(({ doc, ...props }, ref) => (
  <CommandItem
    ref={ref}
    className='relative flex h-10 cursor-default select-none items-center
rounded-lg px-2 text-sm outline-none transition-colors duration-75
active:duration-0 aria-selected:bg-neutral-50
aria-selected:active:bg-neutral-100 data-[disabled]:pointer-events-none
data-[disabled]:opacity-50 dark:aria-selected:bg-neutral-800
dark:aria-selected:active:bg-neutral-700'
    {...props}
  >
    {doc.title}
  </CommandItem>
));
SearchItem.displayName = 'SearchItem';
