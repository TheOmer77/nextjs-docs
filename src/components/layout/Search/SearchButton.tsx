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
justify-start gap-2 rounded-lg bg-neutral-50 px-3 text-sm text-neutral-600
transition-colors duration-200 state-layer hover:state-layer-neutral-100/50
focus-visible:outline-none active:bg-neutral-100 active:duration-0
dark:bg-neutral-700/20 dark:text-neutral-400
dark:hover:state-layer-neutral-800/50 dark:active:bg-neutral-800 sm:flex
[&>*]:z-10 [&>svg]:text-base'
        aria-label='Search docs'
      >
        <SearchIcon />
        <span className='grow text-start sm:inline'>Search docs...</span>
        <kbd
          className='flex h-5 flex-row items-center rounded bg-white/60 px-1.5
font-mono text-[0.625rem] uppercase dark:bg-neutral-800/50'
        >
          {navigator.userAgent.includes('Macintosh') ? (
            <>
              <span className='me-1 text-xs'>⌘</span>K
            </>
          ) : (
            'CTRL K'
          )}
        </kbd>
      </button>
    </>
  );
};
