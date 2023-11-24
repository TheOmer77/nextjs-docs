import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { allDocs } from 'contentlayer/generated';

import { SearchButton } from './SearchButton';
import SearchDialog from './SearchDialog';
import { SearchItem } from './SearchItem';

export const Search = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
      <SearchDialog open={open} onOpenChange={setOpen}>
        {allDocs
          .filter(doc => doc._raw.flattenedPath.split('/').length < 3)
          .map(doc => (
            <SearchItem
              key={doc._id}
              doc={doc}
              onSelect={() => {
                setOpen(false);
                router.push(doc.url);
              }}
            />
          ))}
      </SearchDialog>
    </>
  );
};
