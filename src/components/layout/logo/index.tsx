import type { ComponentPropsWithoutRef } from 'react';

import { SidebarLink } from '@/components/layout/sidebar/sidebar-link';
import { cn } from '@/lib/cn';
import { source } from '@/lib/source';
import { navLogoName } from '@/constants/docs';
import { siteConfig } from '@/constants/site';

export const Logo = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'header'>) => {
  const logoDoc = source.getPage([navLogoName]),
    LogoMdx = logoDoc?.data.body;

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
            {siteConfig.title}
          </span>
        )}
      </SidebarLink>
    </header>
  );
};
