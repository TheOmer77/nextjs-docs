const NotFound = () => (
  <div className='flex min-h-screen w-full flex-col items-center justify-center'>
    <span className='text-[16rem] font-extrabold leading-none text-danger-800 dark:text-danger-200'>
      404
    </span>
    <span className='text-center text-xl text-neutral-700 dark:text-neutral-300'>
      I have no idea what it is that you were looking for - but it&apos;s
      definitely not here.
    </span>
  </div>
);

export default NotFound;
