import { Suspense } from 'react';
import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/logo';
import { Search } from '@/components/layout/search';
import { SearchButton } from '@/components/layout/search/search-button';
import { useModal } from '@/hooks/use-modal';

import { NavLinks } from './nav-links';

const NavDrawerButton = () => {
  const { openModal } = useModal();
  return (
    <Button
      variant='flat'
      size='lg'
      icon
      className='ms-4 md:hidden print:hidden'
      aria-label='Open sidebar'
      onClick={() => openModal('nav-drawer')}
    >
      <MenuIcon />
    </Button>
  );
};

export const Nav = () => (
  <nav className='fixed start-1/2 top-0 z-20 mx-auto flex h-16 w-full max-w-8xl -translate-x-1/2 flex-row items-center justify-between bg-background md:bg-transparent rtl:translate-x-1/2 print:static print:block print:h-auto print:translate-x-0'>
    <Suspense>
      <NavDrawerButton />
    </Suspense>
    <Logo
      /* Setting `display: none` breaks SVG gradients in the logo, so using 
      a different method for hiding on mobile */
      className='invisible absolute md:visible md:relative md:h-16 print:visible print:relative print:h-auto print:w-full print:p-0'
    />
    <div className='flex h-full grow flex-row items-center justify-end gap-2 bg-background px-4 print:hidden'>
      <Suspense fallback={<SearchButton disabled />}>
        <Search />
      </Suspense>
      <NavLinks />
    </div>
  </nav>
);
