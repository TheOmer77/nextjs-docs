import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useModal } from '@/hooks/use-modal';

import { SearchButton } from './search-button';
import SearchDialog from './search-dialog';

export const Search = () => {
  const { currentModal, openModal, closeModal } = useModal();
  const router = useRouter();

  const handleOpenChange = (open: boolean) => !open && closeModal();

  /** TEMPORARY */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleItemSelect = useCallback(
    (doc: { url: string }) => {
      openModal(null, 'replace');
      setTimeout(() => router.replace(doc.url), 10);
    },
    [openModal, router]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.key !== 'k') return;
      event.preventDefault();
      openModal('search');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [openModal]);

  return (
    <>
      <SearchButton onClick={() => openModal('search')} />
      <SearchDialog
        open={currentModal === 'search'}
        onOpenChange={handleOpenChange}
      >
        {/* TODO: Search items */}
      </SearchDialog>
    </>
  );
};
