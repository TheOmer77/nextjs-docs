import { getMDXComponent } from 'next-contentlayer2/hooks';

import { allDocs, navLinksName } from '@/constants/contentlayer';

import { NavLink } from './nav-link';
import { mdxComponents } from '../mdx';

export const NavLinks = () => {
  const linksDoc = allDocs.find(doc => doc._raw.flattenedPath === navLinksName),
    LinksMdx = linksDoc && getMDXComponent(linksDoc.body.code);
  return LinksMdx && <LinksMdx components={{ ...mdxComponents, NavLink }} />;
};
