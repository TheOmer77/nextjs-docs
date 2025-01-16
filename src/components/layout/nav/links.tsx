import type { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { MDXContent } from '@content-collections/mdx/react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { allDocs, navLinksName } from '@/constants/docs';

import { mdxComponents } from '../mdx';

export const NavLink = ({
  href,
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'>) => {
  const LinkComp = href?.startsWith?.('/') ? Link : 'a';
  return (
    <Button
      asChild
      variant='flat'
      size='lg'
      icon
      className={cn('md:size-10', className)}
    >
      <LinkComp {...props} href={href as string}>
        {children}
      </LinkComp>
    </Button>
  );
};

export const NavLinks = () => {
  // TODO: Remove this, move links to config.json
  const linksDoc = allDocs.find(doc => doc._meta.path === navLinksName);
  if (linksDoc)
    return (
      <MDXContent
        code={linksDoc.body.code}
        components={{ ...mdxComponents, NavLink }}
      />
    );
};
