import { Fragment, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { SearchButton } from './SearchButton';
import SearchDialog from './SearchDialog';
import { SearchItem } from './SearchItem';
import { SearchGroup } from './SearchGroup';
import { allDocs, config, sidebarDocs } from '@/constants/contentlayer';
import type { Doc } from '@/types';

const uncategorizedDocs = sidebarDocs.filter(
    doc =>
      typeof doc.category !== 'string' ||
      !Object.keys(config.categories).includes(doc.category)
  ),
  docsByCategory = {
    ...(uncategorizedDocs.length > 0 ? { _: uncategorizedDocs } : {}),
    ...Object.keys(config.categories).reduce(
      (obj, category) => ({
        ...obj,
        [category]: sidebarDocs.filter(doc => doc.category === category),
      }),
      {} as { [key: string]: Doc[] }
    ),
  };

export const Search = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleDocSelect = useCallback(
    (doc: Doc) => {
      setOpen(false);
      router.push(doc.url);
    },
    [router]
  );

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
        {Object.keys(docsByCategory).map(category => (
          <SearchGroup
            key={category}
            {...(category !== '_'
              ? { heading: config.categories[category] }
              : {})}
          >
            {docsByCategory[category as keyof typeof docsByCategory]?.map(
              doc => {
                const children = allDocs
                  .filter(childDoc =>
                    childDoc._raw.flattenedPath.startsWith(
                      `${doc._raw.flattenedPath}/`
                    )
                  )
                  .sort((a, b) =>
                    a._raw.flattenedPath > b._raw.flattenedPath ? 1 : -1
                  );
                return (
                  <Fragment key={doc._id}>
                    <SearchItem
                      key={doc._id}
                      doc={doc}
                      onSelect={() => handleDocSelect(doc)}
                    />
                    {children.map(childDoc => (
                      <SearchItem
                        key={childDoc._id}
                        doc={childDoc}
                        parentDoc={doc}
                        onSelect={() => handleDocSelect(childDoc)}
                      />
                    ))}
                  </Fragment>
                );
              }
            )}
          </SearchGroup>
        ))}
      </SearchDialog>
    </>
  );
};
