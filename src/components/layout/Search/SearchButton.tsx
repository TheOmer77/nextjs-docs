import type { ComponentPropsWithoutRef } from 'react';

import { SearchBoxButton } from './SearchBoxButton';
import { IconButton } from 'components/general';
import { SearchIcon } from 'assets/icons';

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
