'use client';

import {
  createContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import {
  type MaybeModalValue,
  MODAL_SEARCH_KEY,
  MODAL_SEARCH_VALUES,
  type ModalValue,
} from '@/constants/modal';

type ModalContextValue = {
  currentModal: ModalValue;
  openModal: (modalValue: MaybeModalValue, mode?: 'push' | 'replace') => void;
  closeModal: (delta?: number) => void;
};
const initialValue = {
  currentModal: null,
  openModal: () => {},
  closeModal: () => {},
} satisfies ModalContextValue;

export const ModalContext = createContext<ModalContextValue>(initialValue);

const isValidModal = (modal: MaybeModalValue): modal is ModalValue =>
  modal === null ||
  MODAL_SEARCH_VALUES.includes(modal as NonNullable<ModalValue>);

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [currentModal, setCurrentModal] = useState<ModalValue>(null);

  useEffect(() => {
    const handleRouteChange = () => {
      const params = new URLSearchParams(window.location.search);
      const modal = params.get(MODAL_SEARCH_KEY);
      if (modal && isValidModal(modal)) return setCurrentModal(modal);
      setCurrentModal(null);
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const openModal = (
    modal: MaybeModalValue,
    mode: 'push' | 'replace' = 'push'
  ) => {
    const params = new URLSearchParams(window.location.search);
    if (modal && isValidModal(modal)) params.set(MODAL_SEARCH_KEY, modal);
    else params.delete(MODAL_SEARCH_KEY);
    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;

    if (mode === 'replace') window.history.replaceState(null, '', newUrl);
    else window.history.pushState(null, '', newUrl);

    setCurrentModal(isValidModal(modal) ? modal : null);
  };

  const closeModal = (delta = -1) => {
    if (typeof window === 'undefined') return;
    window.history.go(delta);
  };

  return (
    <ModalContext.Provider value={{ currentModal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
