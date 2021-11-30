import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | Bill Buttlicker</title>
        <meta name="description" content="Information about Bill Buttlicker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      About
    </>
  );
};

export default About;
