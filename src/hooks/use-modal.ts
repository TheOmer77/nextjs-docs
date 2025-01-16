import { useContext } from 'react';

import { ModalContext } from '@/components/layout/provider/modal';

export const useModal = () => useContext(ModalContext);
