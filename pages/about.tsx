import Head from 'next/head';

// Types
import type { NextPage } from 'next';

// Styles
import { ContentWrapper } from 'config/theme/globalStyles';

const About: NextPage = () => {
  return (
    <ContentWrapper>
      <Head>
        <title>About | Bill Buttlicker</title>
        <meta name="description" content="Information about Bill Buttlicker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>
    </ContentWrapper>
  );
};

export default About;
