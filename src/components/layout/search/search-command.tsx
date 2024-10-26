import { CommandEmpty, CommandInput, CommandList, CommandRoot } from 'cmdk';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { SearchIcon } from 'lucide-react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/cn';

import { SearchItem } from './search-item';

export const SearchCommand = () => {
  const {
    query: { isLoading, data, error },
    search,
    setSearch,
  } = useDocsSearch({ type: 'fetch' });

  return (
    <CommandRoot
      className='flex size-full flex-col overflow-hidden rounded-lg'
      shouldFilter={false}
    >
      <div
        className={cn(
          'relative flex items-center',
          search.length > 0 && 'border-b'
        )}
        cmdk-input-wrapper=''
      >
        <SearchIcon className='absolute start-4 me-2 size-4 shrink-0 text-muted-foreground' />
        <CommandInput
          placeholder='Search docs...'
          value={search}
          onValueChange={setSearch}
          className='flex h-12 w-full rounded-lg bg-transparent px-3 ps-10 text-base text-foreground outline-none placeholder:text-muted-foreground md:h-11 md:text-sm'
        />
      </div>
      <ScrollArea
        className={cn(
          'max-h-80 overflow-y-auto overflow-x-hidden transition-opacity [direction:inherit]',
          search.length < 1 && 'hidden',
          isLoading && 'opacity-50'
        )}
      >
        <CommandList className='p-2'>
          <CommandEmpty className='py-6 text-center text-sm text-muted-foreground'>
            {error ? 'An error occurred while searching.' : 'No results found.'}
          </CommandEmpty>
          {Array.isArray(data) &&
            data
              .filter(({ type }) => type === 'page')
              .map(item => <SearchItem key={item.id} {...item} />)}
        </CommandList>
      </ScrollArea>
    </CommandRoot>
  );
};
