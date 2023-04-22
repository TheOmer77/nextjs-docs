import Head from 'next/head';
import { Figtree } from 'next/font/google';

const font = Figtree({
  subsets: ['latin'],
  variable: '--font-family',
  fallback: ['sans-serif'],
});

const Home = () => {
  return (
    <>
      <Head>
        <title>App</title>
        <meta name='description' content='This is a description lol' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={font.variable}>App</main>
    </>
  );
};

export default Home;
