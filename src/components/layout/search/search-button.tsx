import type { ComponentPropsWithoutRef } from 'react';
import { SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { SearchBoxButton } from './search-box-button';

export const SearchButton = ({
  onClick,
}: Pick<ComponentPropsWithoutRef<'button'>, 'onClick'>) => (
  <>
    <Button
      variant='flat'
      icon
      className='sm:hidden'
      aria-label='Search docs'
      onClick={onClick}
    >
      <SearchIcon />
    </Button>
    <SearchBoxButton onClick={onClick} className='hidden sm:flex' />
  </>
);
