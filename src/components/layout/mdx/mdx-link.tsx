import { type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

export const MdxLink = ({
  href,
  children,
  ...props
}: ComponentPropsWithoutRef<'a'>) =>
  href?.startsWith?.('/') ? (
    <Link {...props} href={href}>
      {children}
    </Link>
  ) : (
    <a {...props} href={href}>
      {children}
    </a>
  );
