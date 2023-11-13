import type { ReactNode } from 'react';
import { Figtree, Fira_Code } from 'next/font/google';
import clsx from 'clsx';

import { Nav, Sidebar } from 'components/layout';

import 'styles/index.css';
import 'styles/prism.css';

const font = Figtree({
  subsets: ['latin'],
  variable: '--font-family',
  fallback: ['sans-serif'],
});
const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-family-mono',
  fallback: ['monospace'],
});

export const metadata = {
  title: { template: '%s | App', default: 'App' },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={clsx(font.variable, fontMono.variable)}>
      <head>
        <link rel='icon' type='image/x-icon' href='/favicon.png' />
      </head>
      <body
        className='mx-auto flex max-w-8xl flex-row overflow-x-hidden bg-white
text-neutral-900 selection:bg-primary-500/30 selection:text-primary-950
dark:bg-neutral-950 dark:text-neutral-100 dark:selection:text-primary-50'
      >
        <Nav />
        <Sidebar />
        <main className='grow px-4 pt-16 md:ps-[21rem]'>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
