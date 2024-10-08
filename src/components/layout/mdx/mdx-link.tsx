import { type ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';

export const MdxLink = ({ href, ...props }: ComponentPropsWithoutRef<'a'>) =>
  href?.startsWith?.('/') ? (
    <Link {...props} href={href} />
  ) : (
    <a {...props} href={href} />
  );
