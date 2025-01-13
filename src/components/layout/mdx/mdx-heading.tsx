import type { ComponentPropsWithoutRef } from 'react';
import { LinkIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

type HeadingType = 'h1' | 'h2' | 'h3';
type HeadingProps<T extends HeadingType> = Omit<
  ComponentPropsWithoutRef<T>,
  'as'
> & { as?: T };

export const MdxHeading = <T extends HeadingType>({
  as,
  id,
  className,
  children,
  ...props
}: HeadingProps<T>) => {
  const Comp = as ?? 'h1';
  if (!id) return <Comp className={className} {...props} />;

  return (
    <Comp
      id={id}
      className={cn(
        'group flex scroll-m-28 flex-row items-center gap-2',
        className
      )}
      {...props}
    >
      {children}
      <a href={`#${id}`}>
        <LinkIcon
          aria-label='Link to section'
          className='ms-1 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 [&.lucide]:size-4'
        />
      </a>
    </Comp>
  );
};

export const h1 = (props: ComponentPropsWithoutRef<'h1'>) => (
  <MdxHeading as='h1' {...props} />
);
export const h2 = (props: ComponentPropsWithoutRef<'h2'>) => (
  <MdxHeading as='h2' {...props} />
);
export const h3 = (props: ComponentPropsWithoutRef<'h3'>) => (
  <MdxHeading as='h3' {...props} />
);
