import type { PropsWithChildren } from 'react';
import Link from 'next/link';

import { config } from 'contentlayer/generated';
import { cn } from 'utils';

export type HomeLayoutProps = PropsWithChildren<{
  /** Home page main title. */
  title?: string | undefined;
  /** Short text that appears on the home page below the title. */
  tagline?: string | undefined;
  /** Action buttons appearing below the tagline on the home page. */
  actions: {
    /** Text for this action button. */
    text: string;
    /** URL opened by clicking on this action button. */
    url: string;
    /** Whether or not this is the primary action, which uses the theme's primary color. */
    primary: boolean;
  }[];
}>;

export const HomeLayout = ({
  title,
  tagline,
  actions,
  children,
}: HomeLayoutProps) => (
  <div
    className='mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-3xl flex-col
items-start justify-center gap-4 px-8 pb-16'
  >
    <h1 className='text-7xl font-extrabold tracking-tight'>
      {title || config.title}
    </h1>
    {tagline && (
      <p className='text-lg text-neutral-700 dark:text-neutral-300'>
        {tagline}
      </p>
    )}
    <div className='flex flex-row flex-wrap gap-2'>
      {actions.map(({ text, url, primary }, index) => (
        <Link
          key={`home-action-${index}`}
          href={url}
          className={cn(
            `flex h-12 items-center justify-center rounded-lg bg-white px-6
        text-lg font-medium text-neutral-800 shadow-md shadow-neutral-950/20
        transition-[background-color] duration-200 state-layer
        hover:state-layer-neutral-500/10 focus-visible:outline-none
        active:bg-neutral-100 active:duration-0 dark:bg-neutral-900
        dark:text-neutral-200 dark:active:bg-neutral-800 [&>*]:z-10`,
            primary &&
              `bg-primary-main text-primary-contrast
        hover:state-layer-primary-light/30 active:bg-primary-light dark:bg-primary-main
        dark:text-primary-contrast dark:active:bg-primary-light`
          )}
        >
          <span>{text}</span>
        </Link>
      ))}
    </div>
    {children}
  </div>
);
