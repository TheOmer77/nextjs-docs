import {
  Dialog as DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  type DialogProps,
} from '@radix-ui/react-dialog';

import { cn } from 'utils';

const SearchDialog = ({ open, onOpenChange, children }: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          className='fixed inset-0 z-50 bg-black/50
data-[state=closed]:animate-fade-out data-[state=open]:animate-fade-in'
        />
        <DialogContent
          className='fixed start-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)]
max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-lg bg-white shadow-lg
shadow-neutral-950/20 [--zoom-translate-x:-50%] [--zoom-translate-y:-50%]
focus-visible:outline-none data-[state=closed]:animate-zoom-out
data-[state=open]:animate-zoom-in rtl:translate-x-1/2
rtl:[--zoom-translate-x:50%] dark:bg-neutral-900'
        >
          <div className='p-4 text-center text-neutral-500'>
            TODO: Search here
          </div>
          {children}
        </DialogContent>
      </DialogPortal>
    </DialogRoot>
  );
};

export default SearchDialog;
