import { NavHeader } from './NavHeader';
import Search from '../Search';
import IconButton from 'components/general/IconButton';
import { MenuIcon } from 'assets/icons';

export const Nav = () => {
  return (
    <nav
      className='fixed start-1/2 top-0 z-10 mx-auto flex h-16 w-full max-w-8xl
-translate-x-1/2 flex-row items-center justify-between bg-white
dark:bg-neutral-950 md:bg-transparent dark:md:bg-transparent'
    >
      <IconButton aria-label='Open sidebar'>
        <MenuIcon />
      </IconButton>
      <NavHeader />
      <div
        className='flex grow flex-row items-center justify-end bg-white px-4
dark:bg-neutral-950'
      >
        <Search />
      </div>
    </nav>
  );
};
