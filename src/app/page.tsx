import { HomeLayout } from '@/components/layout/home';

const Page = () => (
  <HomeLayout
    title='Docs Thing'
    tagline='A simple docs site powered by Next.js and Content Collections.'
    actions={[
      { text: 'Get started', url: '/docs/basic-usage', primary: true },
      { text: 'Sample pages', url: '/sample/markdown-test' },
    ]}
  />
);

export default Page;
