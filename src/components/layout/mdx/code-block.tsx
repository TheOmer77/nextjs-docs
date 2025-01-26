import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/cn';

export const CodeBlock = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'pre'>) => (
  <pre
    {...props}
    className={cn(
      '[.rehype-code-title:has(+_&)+&]:mt-0 [.rehype-code-title:has(+_&)+&]:rounded-t-none [.rehype-code-title:has(+_&)]:rounded-t-lg [.rehype-code-title:has(+_&)]:border-b [.rehype-code-title:has(+_&)]:bg-[--tw-prose-pre-bg] [.rehype-code-title:has(+_&)]:p-2 [.rehype-code-title:has(+_&)]:font-mono [.rehype-code-title:has(+_&)]:text-sm [.rehype-code-title:has(+_&)]:text-muted-foreground',
      className
    )}
  >
    {children}
  </pre>
);
