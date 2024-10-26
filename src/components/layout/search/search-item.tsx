import { useRouter } from 'next/navigation';
import { CommandItem } from 'cmdk';
import type { SortedResult } from 'fumadocs-core/server';

import { ListItemText } from '@/components/ui/list';
import { useModal } from '@/hooks/use-modal';

export const SearchItem = ({ content, url }: SortedResult) => {
  const { openModal } = useModal();
  const router = useRouter();

  const handleSelect = () => {
    openModal(null, 'replace');
    setTimeout(() => router.replace(url), 10);
  };

  return (
    <CommandItem
      className='relative flex min-h-12 cursor-default select-none flex-row items-center justify-start rounded-lg px-4 py-2 text-base outline-none transition-[background-color] duration-100 state-layer active:duration-0 aria-selected:state-layer-muted/30 aria-selected:active:bg-muted/30 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 md:min-h-10 md:text-sm [&>*]:z-10'
      onSelect={handleSelect}
    >
      <ListItemText primary={content} />
    </CommandItem>
  );
};
