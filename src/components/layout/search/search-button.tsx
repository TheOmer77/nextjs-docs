import type { ComponentPropsWithoutRef } from 'react';
import { SearchIcon } from 'lucide-react';

import { IconButton } from '@/components/ui';

import { SearchBoxButton } from './search-box-button';

export const SearchButton = ({
  onClick,
}: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => (
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
