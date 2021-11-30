import type { AppProps } from 'next/app';

// Components
import Layout from 'components/layout';
import { GlobalThemeProvider } from 'config/theme/GlobalThemeProvider';

// Styles
import 'assets/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalThemeProvider>
  );
}

export default MyApp;
