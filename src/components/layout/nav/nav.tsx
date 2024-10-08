import { NavLinks } from './nav-links';
import { Logo } from '../logo';
import { Search } from '../search';
import { IconButton } from '@/components/general';
import { MenuIcon } from '@/assets/icons';

export interface NavProps {
  onMenuClick?: () => void;
}

export const Nav = ({ onMenuClick }: NavProps) => (
  <nav
    className='fixed start-1/2 top-0 z-20 mx-auto flex h-16 w-full max-w-8xl
-translate-x-1/2 flex-row items-center justify-between bg-white
md:bg-transparent rtl:translate-x-1/2 dark:bg-neutral-950
dark:md:bg-transparent'
  >
    <IconButton
      aria-label='Open sidebar'
      className='ms-2 md:hidden'
      onClick={onMenuClick}
    >
      <MenuIcon />
    </IconButton>
    <Logo
      /* Setting `display: none` breaks SVG gradients, so using other method
      for hiding on mobile */
      className='invisible absolute h-0 w-0 md:visible md:relative md:h-16'
    />
    <div
      className='flex h-full grow flex-row items-center justify-end gap-2
bg-white px-2 md:px-4 dark:bg-neutral-950'
    >
      <Search />
      <NavLinks />
    </div>
  </nav>
);
