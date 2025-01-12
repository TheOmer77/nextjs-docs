import type { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { Figtree, Fira_Code } from 'next/font/google';
import { clsx } from 'clsx';

import Layout from '@/components/layout';
import { config } from '@/constants/docs';

import '@/styles/index.css';
import '@/styles/shiki.css';

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
  title: { template: config.titleTemplate, default: config.title },
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html
    lang='en'
    className={clsx(font.variable, fontMono.variable)}
    suppressHydrationWarning
  >
    <head>
      <link rel='icon' type='image/x-icon' href='/favicon.png' />
    </head>
    <body>
      <ThemeProvider>
        <Layout>{children}</Layout>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
