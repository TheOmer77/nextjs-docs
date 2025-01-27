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
      <div className='rounded-t-lg border-b bg-[--tw-prose-pre-bg] p-2 font-mono text-sm text-muted-foreground '>
        {title}
      </div>
    )}
    <pre {...props} className={cn(title && 'mt-0 rounded-t-none', className)}>
      {children}
    </pre>
  </>
);
