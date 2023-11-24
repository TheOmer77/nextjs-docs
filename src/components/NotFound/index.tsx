const NotFound = () => (
  <div className='flex min-h-[calc(100dvh-4rem)] w-full flex-col items-center justify-center'>
    <h1 className='text-9xl font-extrabold leading-none text-danger-800 dark:text-danger-200 sm:text-[16rem] md:text-[12rem] lg:text-[16rem]'>
      404
    </h1>
    <p className='text-center text-xl text-neutral-700 dark:text-neutral-300'>
      I have no idea what it is that you were looking for - but it&apos;s
      definitely not here.
    </p>
  </div>
);

export default NotFound;
