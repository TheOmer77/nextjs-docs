import type { ReactNode } from 'react';
import { Figtree, Fira_Code } from 'next/font/google';

import 'styles/reset.css';
import 'styles/globals.css';
import 'styles/prism.css';

const font = Figtree({
  subsets: ['latin'],
  variable: '--font-family',
  fallback: ['sans-serif'],
});
const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-family-monospace',
  fallback: ['monospace'],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <title>App</title>
        <link rel='icon' type='image/x-icon' href='/favicon.png' />
      </head>
      <body className={[font.variable, fontMono.variable].join(' ')}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
