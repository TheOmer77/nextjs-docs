import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';

import { DocProvider } from './doc';
import { ModalProvider } from './modal';

export const Provider = ({ children }: PropsWithChildren) => (
  <ThemeProvider>
    <DocProvider>
      <ModalProvider>{children}</ModalProvider>
    </DocProvider>
  </ThemeProvider>
);
