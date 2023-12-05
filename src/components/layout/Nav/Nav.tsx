import { Header } from '../Header';
import { Search } from '../Search';
import { IconButton } from 'components/general';
import { MenuIcon } from 'assets/icons';

export interface NavProps {
  onMenuClick?: () => void;
}

export const Nav = ({ onMenuClick }: NavProps) => (
  <nav
    className='fixed start-1/2 top-0 z-20 mx-auto flex h-16 w-full max-w-8xl
-translate-x-1/2 flex-row items-center justify-between bg-white
rtl:translate-x-1/2 dark:bg-neutral-950 md:bg-transparent
dark:md:bg-transparent'
  >
    <IconButton
      aria-label='Open sidebar'
      className='ms-2'
      onClick={onMenuClick}
    >
      <MenuIcon />
    </IconButton>
    <Header
      /* Setting `display: none` breaks SVG gradients, so using other method
      for hiding on mobile */
      className='invisible absolute h-0 w-0 md:visible md:relative md:h-16'
    />
    <div
      className='flex h-full grow flex-row items-center justify-end bg-white
px-2 dark:bg-neutral-950 md:px-4'
    >
      <Search />
    </div>
  </nav>
);
