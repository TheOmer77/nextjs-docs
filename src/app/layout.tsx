import type { PropsWithChildren } from 'react';
import { Figtree, Fira_Code } from 'next/font/google';
import { clsx } from 'clsx';

import { Nav } from '@/components/layout/nav';
import { Sidebar } from '@/components/layout/sidebar';

import '@/styles/index.css';
import '@/styles/prism.css';

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

const Layout = ({ children }: PropsWithChildren) => (
  <html lang='en' className={clsx(font.variable, fontMono.variable)}>
    <body className='min-h-dvh'>
      <Nav />
      <div className='mx-auto flex max-w-8xl flex-row overflow-x-hidden'>
        <Sidebar />
        {children}
      </div>
    </body>
  </html>
);

export default Layout;
