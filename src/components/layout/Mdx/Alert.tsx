import { AlertOctagonIcon, InfoIcon } from 'assets/icons';
import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type PropsWithChildren,
} from 'react';
import { cn } from 'lib/cn';

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
        `my-[1.6em] border-s-[0.25rem] ps-[1em]
[&>:first-child>svg:first-child]:me-2 [&>:first-child>svg:first-child]:inline
[&>:first-child]:mb-2 [&>:nth-child(2)]:mt-0`,
        type === 'danger'
          ? `border-danger-main [&>:first-child>*]:text-danger-main
[&>:first-child]:text-danger-main`
          : `border-primary-main [&>:first-child>*]:text-primary-main
[&>:first-child]:text-primary-main`,
        className
      )}
    >
      <p>
        {type === 'danger' ? <AlertOctagonIcon /> : <InfoIcon />}
        {childrenArr[0]?.props.children}
      </p>
      {childrenArr.slice(1)}
    </div>
  );
};
