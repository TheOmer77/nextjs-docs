import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import Link from 'next/link';

import { cn } from 'utils';
import { config } from 'constants/contentlayer';

export type HomeLayoutProps = Omit<ComponentPropsWithoutRef<'div'>, 'title'> & {
  /** Home page main title. */
  title?: ReactNode;
  /** Short text that appears below the title. */
  tagline?: ReactNode;
  /** Action buttons appearing below the tagline. */
  actions: {
    /** Text for this action button. */
    text: ReactNode;
    /** URL opened by clicking on this action button. */
    url: string;
    /** Whether or not this is the primary action, which uses the theme's primary color. */
    primary: boolean;
  }[];
};

export const HomeLayout = ({
  title,
  tagline,
  actions,
  children,
  className,
  ...props
}: HomeLayoutProps) => (
  <div
    {...props}
    className={cn(
      `relative mx-auto flex min-h-[calc(100dvh-8rem)] w-full flex-col
items-start justify-center gap-4 px-4 pb-16 sm:px-8`,
      className
    )}
  >
    <h1 className='m-0 text-5xl font-extrabold tracking-tight sm:text-7xl'>
      {title || config.title}
    </h1>
    {tagline && (
      <p className='m-0 text-lg text-neutral-700 dark:text-neutral-300 sm:text-xl'>
        {tagline}
      </p>
    )}
    <div className='m-0 flex flex-row flex-wrap gap-2'>
      {actions.map(({ text, url, primary }, index) => (
        <Link
          key={`home-action-${index}`}
          href={url}
          className={cn(
            `flex h-12 items-center justify-center rounded-lg bg-white px-6
text-lg font-medium text-neutral-800 no-underline shadow-md
shadow-neutral-950/20 transition-[background-color] duration-200 state-layer
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
    <div>{children}</div>
  </div>
);
