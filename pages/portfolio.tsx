import Head from 'next/head';

// Types
import type { NextPage } from 'next';

const Portfolio: NextPage = () => {
  return (
    <div>
      Portfolio
      <Head>
        <title>Contact | Bill Buttlicker</title>
        <meta
          name="description"
          content="Contact information about Bill Buttlicker"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Portfolio;
