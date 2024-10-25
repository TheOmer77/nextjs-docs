import { mdxComponents } from '@/components/layout/mdx';
import { source } from '@/lib/source';
import { navLinksName } from '@/constants/docs';

import { NavLink } from './nav-link';

export const NavLinks = () => {
  const linksDoc = source.getPage([navLinksName]),
    LinksMdx = linksDoc?.data.body;
  return LinksMdx && <LinksMdx components={{ ...mdxComponents, NavLink }} />;
};
