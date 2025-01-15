import type { ComponentPropsWithoutRef } from 'react';
import { MDXContent } from '@content-collections/mdx/react';

import { cn } from '@/lib/cn';
import { allDocs, config, navLogoName } from '@/constants/docs';

import { SidebarLink } from '../sidebar/sidebar-link';

export const Logo = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'header'>) => {
  // TODO: Remove this
  const logoDoc = allDocs.find(doc => doc._meta.path === navLogoName);

  return (
    <header
      {...props}
      className={cn(`flex h-16 flex-row items-center px-4 md:w-80`, className)}
    >
      <SidebarLink href='/'>
        {logoDoc ? (
          <MDXContent code={logoDoc.body.code} />
        ) : (
          <span className='text-2xl font-bold tracking-tight text-primary'>
            {config.title}
          </span>
        )}
      </SidebarLink>
    </header>
  );
};
