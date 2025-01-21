import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { config } from '@/constants/docs';

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
    primary?: boolean;
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
      `relative mx-auto flex min-h-[calc(100dvh-8rem)] w-full flex-col items-start justify-center gap-4 px-4 sm:px-8`,
      className
    )}
  >
    <h1 className='m-0 text-5xl font-extrabold tracking-tight sm:text-7xl'>
      {title || config.title}
    </h1>
    {tagline && (
      <p className='m-0 text-lg text-muted-foreground sm:text-xl'>{tagline}</p>
    )}
    <div className='m-0 flex flex-row flex-wrap gap-2'>
      {actions.map(({ text, url, primary }, index) => (
        <Button
          key={`home-action-${index}`}
          variant={primary ? 'primary' : 'default'}
          className='h-12 cursor-pointer px-6 text-lg no-underline'
          asChild
        >
          <Link href={url}>
            <span>{text}</span>
          </Link>
        </Button>
      ))}
    </div>
    <div>{children}</div>
  </div>
);
