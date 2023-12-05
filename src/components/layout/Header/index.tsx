import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { getMDXComponent } from 'next-contentlayer/hooks';

import { cn } from 'utils';
import { allDocs, config, navLogoName } from 'constants/contentlayer';

export const Header = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<'header'>
>(({ className, ...props }, ref) => {
  const logoDoc = allDocs.find(doc => doc._raw.flattenedPath === navLogoName),
    LogoMdx = logoDoc && getMDXComponent(logoDoc.body.code);

  return (
    <header
      {...props}
      ref={ref}
      className={cn(`flex h-16 flex-row items-center px-4 md:w-80`, className)}
    >
      <Link href='/'>
        {LogoMdx ? (
          <LogoMdx />
        ) : (
          <span className='text-2xl font-bold tracking-tight text-primary-main'>
            {config.title}
          </span>
        )}
      </Link>
    </header>
  );
});
Header.displayName = 'Header';
