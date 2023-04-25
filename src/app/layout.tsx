import type { ReactNode } from 'react';
import { Figtree } from 'next/font/google';

import 'styles/globals.css';

const font = Figtree({
  subsets: ['latin'],
  variable: '--font-family',
  fallback: ['sans-serif'],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>App</title>
        <link rel='icon' type='image/x-icon' href='/favicon.png' />
      </head>
      <body className={font.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
