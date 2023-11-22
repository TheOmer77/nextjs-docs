import { IconButton } from 'components/general';
import { SearchIcon } from 'assets/icons';
import type { ComponentPropsWithoutRef } from 'react';

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
      <button
        onClick={onClick}
        className='hidden h-9 w-64 select-none flex-row items-center
justify-start gap-2 rounded-lg bg-neutral-50 px-2 text-sm text-neutral-600
transition-colors duration-200 state-layer hover:state-layer-neutral-100/50
focus-visible:outline-none active:bg-neutral-100 active:duration-0
dark:bg-neutral-700/20 dark:text-neutral-400
dark:hover:state-layer-neutral-800/50 dark:active:bg-neutral-800 sm:flex
[&>*]:z-10 [&>svg:first-child]:ms-1 [&>svg]:text-base'
        aria-label='Search docs'
      >
        <SearchIcon />
        <span className='hidden sm:inline'>Search docs...</span>
      </button>
    </>
  );
};
