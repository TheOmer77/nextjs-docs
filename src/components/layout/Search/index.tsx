import { SearchIcon } from 'assets/icons';

const Search = () => {
  return (
    <div>
      <button
        className='flex h-10 w-10 select-none flex-row items-center
justify-center gap-2 rounded-lg text-sm text-neutral-700 state-layer
hover:state-layer-neutral-500/20 focus-visible:outline-none
focus-visible:state-layer-neutral-500/20 active:state-layer-neutral-500/30
dark:text-neutral-300 sm:h-9 sm:w-64 sm:justify-start sm:bg-neutral-50
sm:px-4 dark:sm:bg-neutral-900 [&>svg]:text-xl [&>svg]:sm:text-base'
        aria-label='Search docs'
      >
        <SearchIcon />
        <span className='hidden sm:inline'>Search docs...</span>
      </button>
    </div>
  );
};

export default Search;
