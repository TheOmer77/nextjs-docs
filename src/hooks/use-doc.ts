import { useContext } from 'react';

import { DocContext } from '@/components/layout/provider/doc';

export const useDoc = () => useContext(DocContext);
