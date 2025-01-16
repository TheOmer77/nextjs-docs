export const MODAL_SEARCH_KEY = 'modal';
export const MODAL_SEARCH_VALUES = ['nav-drawer', 'search'] as const;

export type ModalValue = null | (typeof MODAL_SEARCH_VALUES)[number];
export type MaybeModalValue =
  | null
  | (typeof MODAL_SEARCH_VALUES)[number]
  | ({} & string);
