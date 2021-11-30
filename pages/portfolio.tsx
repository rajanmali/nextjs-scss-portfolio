import Head from 'next/head';

// Types
import type { NextPage } from 'next';

// Styles
import { ContentWrapper } from 'config/theme/globalStyles';

const Portfolio: NextPage = () => {
  return (
    <ContentWrapper>
      <Head>
        <title>Contact | Bill Buttlicker</title>
        <meta
          name="description"
          content="Contact information about Bill Buttlicker"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Portfolio</h1>
    </ContentWrapper>
  );
};

export default Portfolio;
