import { MDXContent } from '@content-collections/mdx/react';

import { allDocs, navLinksName } from '@/constants/docs';

import { NavLink } from './nav-link';
import { mdxComponents } from '../mdx';

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
