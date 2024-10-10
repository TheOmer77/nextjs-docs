import type {
  ComponentPropsWithoutRef,
  ElementRef,
  MouseEventHandler,
} from 'react';
import { useRouter } from 'next/navigation';
import { getMDXComponent } from 'next-contentlayer2/hooks';

import { useModal } from '@/hooks/use-modal';
import { cn } from '@/lib/cn';
import { allDocs, config, navLogoName } from '@/constants/contentlayer';

export const Logo = ({
  className,
  ...props
}: ComponentPropsWithoutRef<'header'>) => {
  const router = useRouter();
  const { currentModal, openModal } = useModal();

  const logoDoc = allDocs.find(doc => doc._raw.flattenedPath === navLogoName),
    LogoMdx = logoDoc && getMDXComponent(logoDoc.body.code);

  const handleClick: MouseEventHandler<ElementRef<'a'>> = e => {
    if (!e.currentTarget) return;
    const pathname = e.currentTarget.pathname;
    e.preventDefault();

    // Same behavior as Next link
    if (!currentModal) return router.push(pathname);

    // // First close drawer, then navigate
    openModal(null, 'replace');
    setTimeout(() => router.replace(pathname), 10);
  };

  return (
    <header
      {...props}
      className={cn(`flex h-16 flex-row items-center px-4 md:w-80`, className)}
    >
      <a href='/' onClick={handleClick}>
        {LogoMdx ? (
          <LogoMdx />
        ) : (
          <span className='text-2xl font-bold tracking-tight text-primary'>
            {config.title}
          </span>
        )}
      </a>
    </header>
  );
};
