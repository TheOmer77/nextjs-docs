import { useSearchParams } from 'next/navigation';

import { MODAL_SEARCH_KEY, type ModalValue } from '@/constants/modal';

export const useModal = () => {
  const searchParams = useSearchParams(),
    currentModal = searchParams.get(MODAL_SEARCH_KEY) as ModalValue;

  const openModal = (modal: ModalValue, mode: 'push' | 'replace' = 'push') => {
    if (typeof window === 'undefined' || modal === currentModal) return;

    const params = new URLSearchParams(window.location.search);
    if (modal === null) params.delete(MODAL_SEARCH_KEY);
    else params.set(MODAL_SEARCH_KEY, modal);
    const newParamsStr = params.toString();

    if (mode === 'replace')
      return window.history.replaceState(null, '', `?${newParamsStr}`);
    window.history.pushState(null, '', `?${newParamsStr}`);
  };

  const closeModal = (delta = -1) => {
    if (typeof window === 'undefined') return;
    window.history.go(delta);
  };

  return { currentModal, openModal, closeModal };
};
