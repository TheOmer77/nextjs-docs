import type { ComponentPropsWithoutRef } from 'react';

export const CodeBlock = ({
  children,
  ...props
}: ComponentPropsWithoutRef<'pre'>) => <pre {...props}>{children}</pre>;
