import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bill Buttlicker</title>
        <meta name="description" content="Portfolio for Bill Buttlicker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
    </>
  );
};

export default Home;
