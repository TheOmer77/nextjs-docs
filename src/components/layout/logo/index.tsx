import type { ComponentPropsWithoutRef } from 'react';
import { getMDXComponent } from 'next-contentlayer2/hooks';

import { cn } from '@/lib/cn';
import { allDocs, config, navLogoName } from '@/constants/contentlayer';

import { SidebarLink } from '../sidebar/sidebar-link';

export const Logo = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'header'>) => {
  const logoDoc = allDocs.find(doc => doc._raw.flattenedPath === navLogoName),
    LogoMdx = logoDoc && getMDXComponent(logoDoc.body.code);

  return (
    <header
      {...props}
      className={cn(`flex h-16 flex-row items-center px-4 md:w-80`, className)}
    >
      <SidebarLink href='/'>
        {LogoMdx ? (
          <LogoMdx />
        ) : (
          <span className='text-2xl font-bold tracking-tight text-primary'>
            {config.title}
          </span>
        )}
      </SidebarLink>
    </header>
  );
};
