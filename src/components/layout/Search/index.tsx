import SearchIcon from 'assets/icons/search.svg?react';

const Search = () => {
  return (
    <div>
      <button
        className='flex h-10 w-64 flex-row items-center gap-2 rounded-lg
bg-neutral-50 px-4 text-neutral-700 state-layer
hover:state-layer-neutral-500/20 focus-visible:outline-none
focus-visible:state-layer-neutral-500/20 active:state-layer-neutral-500/30
dark:bg-neutral-900 dark:text-neutral-300'
      >
        <SearchIcon />
        Search docs...
      </button>
    </div>
  );
};

export default Search;
