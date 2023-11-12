import { NavHeader } from './NavHeader';

export const Nav = () => {
  return (
    <nav
      className='fixed start-1/2 top-0 z-10 mx-auto flex h-16 w-full max-w-8xl
-translate-x-1/2 flex-row justify-between'
    >
      <NavHeader />
      <div className='flex grow flex-row items-center justify-end bg-white px-4 dark:bg-neutral-950'></div>
    </nav>
  );
};
