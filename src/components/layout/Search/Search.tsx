import { useState } from 'react';

import { SearchButton } from './SearchButton';
import SearchDialog from './SearchDialog';

export const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SearchButton onClick={() => setOpen(true)} />
      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  );
};
