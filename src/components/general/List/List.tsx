'use client';

import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { cn } from 'utils';

import { RovingFocusGroup } from '@radix-ui/react-roving-focus';

import {
  LIST_GROUP_NAME,
  ListContext,
  useRovingFocusGroupScope,
  type ScopedProps,
} from './common';

type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup>;

export interface ListProps extends ComponentPropsWithoutRef<'ul'> {
  disabled?: boolean;
  rovingFocus?: boolean;
  loop?: RovingFocusGroupProps['loop'];
  dir?: RovingFocusGroupProps['dir'];
}

// eslint-disable-next-line react/display-name
const ListUl = forwardRef<HTMLUListElement, ComponentPropsWithoutRef<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      {...props}
      ref={ref}
      role='group'
      className={cn('flex w-full flex-col gap-px rounded-lg px-2', className)}
    />
  )
);

export const List = forwardRef<HTMLUListElement, ScopedProps<ListProps>>(
  (
    {
      __scopeList,
      disabled = false,
      rovingFocus = true,
      loop = false,
      className,
      ...props
    },
    ref
  ) => {
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeList);

    return (
      <ListContext
        scope={__scopeList}
        rovingFocus={rovingFocus}
        disabled={disabled}
      >
        {rovingFocus ? (
          <RovingFocusGroup
            asChild
            {...rovingFocusGroupScope}
            orientation='vertical'
            loop={loop}
          >
            <ListUl {...props} ref={ref} className={className} />
          </RovingFocusGroup>
        ) : (
          <ListUl {...props} ref={ref} className={className} />
        )}
      </ListContext>
    );
  }
);
List.displayName = LIST_GROUP_NAME;
