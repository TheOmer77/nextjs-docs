import Link from 'next/link';

import { Button } from '@/components/ui/button';

const actions = [
  { text: 'Get started', href: '/docs/basic-usage', primary: true },
  { text: 'Sample pages', href: '/sample/markdown-test' },
] satisfies { text: string; href: string; primary?: boolean }[];

const Page = () => (
  <main className='flex min-h-[calc(100dvh-8rem)] w-full flex-col items-start justify-center gap-4 px-4 sm:px-8'>
    <h1 className='m-0 text-5xl font-extrabold tracking-tight sm:text-7xl'>
      Docs Thing
    </h1>
    <p className='m-0 text-lg text-muted-foreground sm:text-xl'>
      A simple docs site powered by Next.js and Content Collections.
    </p>

    <div className='m-0 flex flex-row flex-wrap gap-2'>
      {actions.map(({ text, href, primary }, index) => (
        <Button
          key={`home-action-${index}`}
          variant={primary ? 'primary' : 'default'}
          className='h-12 cursor-pointer px-6 text-lg no-underline'
          asChild
        >
          <Link href={href}>{text}</Link>
        </Button>
      ))}
    </div>
  </main>
);

export default Page;
