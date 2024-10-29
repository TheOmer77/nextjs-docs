import type { ComponentPropsWithoutRef } from 'react';
import { SearchIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { SearchBoxButton } from './search-box-button';

export const SearchButton = ({
  onClick,
  disabled,
}: Pick<ComponentPropsWithoutRef<'button'>, 'onClick' | 'disabled'>) => (
  <>
    <Button
      variant='flat'
      size='lg'
      icon
      className='sm:hidden'
      aria-label='Search docs'
      onClick={onClick}
      disabled={disabled}
    >
      <SearchIcon />
    </Button>
    <SearchBoxButton
      onClick={onClick}
      disabled={disabled}
      className='hidden sm:flex'
    />
  </>
);
