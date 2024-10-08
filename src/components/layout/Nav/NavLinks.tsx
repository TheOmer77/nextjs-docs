import { getMDXComponent } from 'next-contentlayer/hooks';

import { NavLink } from './NavLink';
import { mdxComponents } from '../Mdx';
import { allDocs, navLinksName } from '@/constants/contentlayer';

export const NavLinks = () => {
  const linksDoc = allDocs.find(doc => doc._raw.flattenedPath === navLinksName),
    LinksMdx = linksDoc && getMDXComponent(linksDoc.body.code);
  return LinksMdx && <LinksMdx components={{ ...mdxComponents, NavLink }} />;
};
