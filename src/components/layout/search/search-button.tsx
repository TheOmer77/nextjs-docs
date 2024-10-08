import type { ComponentPropsWithoutRef } from 'react';

import { SearchBoxButton } from './search-box-button';
import { IconButton } from '@/components/ui';
import { SearchIcon } from 'lucide-react';

export const SearchButton = ({
  onClick,
}: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => {
  return (
    <>
      <IconButton
        className='sm:hidden'
        aria-label='Search docs'
        onClick={onClick}
      >
        <SearchIcon />
      </IconButton>
      <SearchBoxButton onClick={onClick} className='hidden sm:flex' />
    </>
  );
};
