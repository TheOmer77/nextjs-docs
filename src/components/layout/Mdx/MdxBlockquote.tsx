import {
  Children,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type PropsWithChildren,
} from 'react';

import { Alert } from './Alert';

const infoPrefix = '[!info]',
  dangerPrefix = '[!danger]';

export const MdxBlockquote = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<'blockquote'>) => {
  const childrenArr = Children.toArray(children).filter(
    isValidElement
  ) as ReactElement<PropsWithChildren>[];
  const initialContent = Children.toArray(childrenArr[0]?.props.children)[0];
  const isInfo =
      typeof initialContent === 'string' &&
      initialContent.toLowerCase().startsWith(infoPrefix),
    isDanger =
      typeof initialContent === 'string' &&
      initialContent.toLowerCase().startsWith(dangerPrefix);

  return isInfo || isDanger ? (
    <Alert type={isDanger ? 'danger' : 'info'} className={className}>
      <p>
        {Children.toArray(childrenArr[0]?.props.children)[0]
          ?.toString()
          .slice((isDanger ? dangerPrefix : infoPrefix).length)}
        {Children.toArray(childrenArr[0]?.props.children).slice(1)}
      </p>
      {Children.toArray(childrenArr.slice(1))}
    </Alert>
  ) : (
    <blockquote {...props} className={className}>
      {children}
    </blockquote>
  );
};
