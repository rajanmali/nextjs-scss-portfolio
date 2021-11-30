import type { AppProps } from 'next/app';

// Components
import Layout from '../components/layout';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
