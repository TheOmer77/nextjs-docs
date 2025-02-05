import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/cn';

export const CodeBlock = ({
  children,
  title,
  className,
  ...props
}: ComponentPropsWithoutRef<'pre'>) => (
  <>
    {title && (
      <div className='flex h-10 flex-row items-center rounded-t-lg border-b bg-[--tw-prose-pre-bg] px-4 font-mono text-sm text-muted-foreground '>
        {title}
      </div>
    )}
    <pre
      {...props}
      className={cn('px-4', title && 'mt-0 rounded-t-none', className)}
    >
      {children}
    </pre>
  </>
);
