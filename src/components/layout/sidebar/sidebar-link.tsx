import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type MouseEventHandler,
} from 'react';
import { useRouter } from 'next/navigation';

import { useModal } from '@/hooks/use-modal';

export const SidebarLink = forwardRef<
  ElementRef<'a'>,
  ComponentPropsWithoutRef<'a'>
>(({ href, children, ...props }, ref) => {
  const router = useRouter();
  const { currentModal, openModal } = useModal();

  const handleClick: MouseEventHandler<ElementRef<'a'>> = e => {
    if (!e.currentTarget) return;
    const pathname = e.currentTarget.pathname;
    e.preventDefault();

    // Same behavior as Next link
    if (!currentModal) return router.push(pathname);

    // First close drawer, then navigate
    openModal(null, 'replace');
    setTimeout(() => router.replace(pathname), 10);
  };

  return (
    <a {...props} ref={ref} href={href} onClick={handleClick}>
      {children}
    </a>
  );
});
SidebarLink.displayName = 'SidebarLink';
