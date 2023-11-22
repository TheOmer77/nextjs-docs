import { useEffect, useState } from 'react';

import { SearchButton } from './SearchButton';
import SearchDialog from './SearchDialog';

export const Search = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <SearchButton onClick={() => setOpen(true)} />
      <SearchDialog open={open} onOpenChange={setOpen} />
    </>
  );
};
