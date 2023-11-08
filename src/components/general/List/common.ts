import { createContextScope, type Scope } from '@radix-ui/react-context';
import { createRovingFocusGroupScope } from '@radix-ui/react-roving-focus';

export const LIST_GROUP_NAME = 'List',
  LIST_ITEM_NAME = 'ListItem';

export type ScopedProps<P> = P & { __scopeList?: Scope };
export type ListContextValue = { rovingFocus: boolean; disabled: boolean };

export const [createListContext, createListScope] = createContextScope(
  LIST_GROUP_NAME,
  [createRovingFocusGroupScope]
);
export const useRovingFocusGroupScope = createRovingFocusGroupScope();

export const [ListContext, useListContext] =
  createListContext<ListContextValue>(LIST_GROUP_NAME);
