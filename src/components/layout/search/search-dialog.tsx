import {
  Dialog as DialogRoot,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  type DialogProps,
} from '@radix-ui/react-dialog';

import { SearchCommand } from './search-command';

const SearchDialog = ({ open, onOpenChange, children }: DialogProps) => (
  <DialogRoot open={open} onOpenChange={onOpenChange}>
    <DialogPortal>
      <DialogOverlay className='fixed inset-0 z-50 bg-black/50 duration-300 data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in' />
      <DialogContent
        className='fixed start-1/2 top-4 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 gap-4 rounded-lg bg-white shadow-lg shadow-neutral-950/20 duration-300 [--zoom-translate-x:-50%] focus-visible:outline-none data-[state=closed]:animate-zoom-out data-[state=open]:animate-zoom-in sm:top-20 md:top-32 rtl:translate-x-1/2 rtl:[--zoom-translate-x:50%] dark:bg-neutral-900'
        aria-describedby={undefined}
      >
        <DialogTitle className='sr-only'>Search docs...</DialogTitle>
        <SearchCommand>{children}</SearchCommand>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
);

export default SearchDialog;
