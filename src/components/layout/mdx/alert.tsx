import {
  Children,
  type ComponentPropsWithoutRef,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import { AlertOctagonIcon, InfoIcon } from 'lucide-react';

import { cn } from '@/lib/cn';

export type MdxAlertProps = ComponentPropsWithoutRef<'div'> & {
  type: 'info' | 'danger';
};

export const Alert = ({
  type,
  className,
  children,
  ...props
}: MdxAlertProps) => {
  const childrenArr = Children.toArray(children).filter(
    isValidElement
  ) as ReactElement<PropsWithChildren>[];

  return (
    <div
      {...props}
      className={cn(
        'my-[1.6em] border-s-[0.25rem] ps-[1em] [&>:nth-child(2)]:mt-0',
        type === 'danger' ? 'border-danger' : 'border-primary',
        className
      )}
    >
      <p
        className={cn(
          'mb-2 flex flex-row items-center [&>*]:text-inherit [&>svg]:me-3 [&>svg]:shrink-0',
          type === 'danger' ? 'text-danger' : 'text-primary'
        )}
      >
        {type === 'danger' ? <AlertOctagonIcon /> : <InfoIcon />}
        {childrenArr[0]?.props.children}
      </p>
      {childrenArr.slice(1)}
    </div>
  );
};
