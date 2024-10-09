import type { PropsWithChildren, ReactNode } from 'react';

export type ErrorLayoutProps = PropsWithChildren<{
  /** The error code, or main title. */
  code: ReactNode;
  /** A short description of the error. */
  text: ReactNode;
}>;

export const ErrorLayout = ({
  code = 'Error',
  text = 'An error occurred.',
  children,
}: ErrorLayoutProps) => (
  <div className='flex min-h-[calc(100dvh-8rem)] w-full flex-col items-center justify-center pb-16'>
    <h1 className='m-0 text-9xl font-extrabold leading-none tracking-tight text-danger-800 sm:text-[16rem] md:text-[12rem] lg:text-[16rem] dark:text-danger-200'>
      {code}
    </h1>
    <p className='m-0 text-center text-xl text-muted-foreground'>{text}</p>
    {children}
  </div>
);
