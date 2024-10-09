import { MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import { NavLinks } from './nav-links';
import { Logo } from '../logo';
import { Search } from '../search';

export interface NavProps {
  onMenuClick?: () => void;
}

export const Nav = ({ onMenuClick }: NavProps) => (
  <nav className='fixed start-1/2 top-0 z-20 mx-auto flex h-16 w-full max-w-8xl -translate-x-1/2 flex-row items-center justify-between bg-background md:bg-transparent rtl:translate-x-1/2'>
    <Button
      variant='flat'
      size='lg'
      icon
      className='ms-4 md:hidden'
      aria-label='Open sidebar'
      onClick={onMenuClick}
    >
      <MenuIcon />
    </Button>
    <Logo
      /* Setting `display: none` breaks SVG gradients in the logo, so using 
      a different other method for hiding on mobile */
      className='invisible absolute size-0 md:visible md:relative md:h-16'
    />
    <div className='flex h-full grow flex-row items-center justify-end gap-2 bg-background px-4'>
      <Search />
      <NavLinks />
    </div>
  </nav>
);
