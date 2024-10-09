import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import { CommandEmpty, CommandInput, CommandList, CommandRoot } from 'cmdk';
import { SearchIcon } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';

export const SearchCommand = forwardRef<
  ElementRef<typeof CommandRoot>,
  ComponentPropsWithoutRef<typeof CommandRoot>
>(({ children, ...props }, ref) => (
  <CommandRoot
    ref={ref}
    className='flex size-full flex-col overflow-hidden rounded-lg'
    {...props}
  >
    <div
      className='flex items-center border-b border-neutral-200 px-3 dark:border-neutral-800'
      cmdk-input-wrapper=''
    >
      <SearchIcon className='me-2 size-4 shrink-0 text-neutral-600 dark:text-neutral-400' />
      <CommandInput
        placeholder='Search docs...'
        className='flex h-11 w-full rounded-lg bg-transparent py-3 text-sm text-neutral-800 outline-none placeholder:text-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-400'
        {...props}
      />
    </div>
    <ScrollArea className='max-h-80 overflow-y-auto overflow-x-hidden [direction:inherit]'>
      <CommandList className='p-2'>
        <CommandEmpty className='py-6 text-center text-sm text-neutral-600 dark:text-neutral-400'>
          No results found.
        </CommandEmpty>
        {children}
      </CommandList>
    </ScrollArea>
  </CommandRoot>
));
SearchCommand.displayName = 'Command';
