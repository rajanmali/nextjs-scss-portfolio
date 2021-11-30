import Head from 'next/head';

// Types
import type { NextPage } from 'next';

// Styles
import { ContentWrapper } from 'config/theme/globalStyles';

const Home: NextPage = () => {
  return (
    <ContentWrapper>
      <Head>
        <title>Bill Buttlicker</title>
        <meta name="description" content="Portfolio for Bill Buttlicker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Home</h1>
    </ContentWrapper>
  );
};

export default Home;
