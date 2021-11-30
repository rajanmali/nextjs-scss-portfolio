import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

// Components
import Layout from 'components/layout';
import ScorllToTopBtn from 'components/ScrollToTopBtn';
import { GlobalThemeProvider } from 'config/theme/GlobalThemeProvider';

// Styles
import 'assets/styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [displaySTTBtn, setdisplaySTTBtn] = useState(false);
  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setdisplaySTTBtn(true);
    } else {
      setdisplaySTTBtn(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <GlobalThemeProvider>
      <Layout>
        <Component {...pageProps} />
        {displaySTTBtn && <ScorllToTopBtn onClick={handleScrollToTop} />}
      </Layout>
    </GlobalThemeProvider>
  );
}

export default MyApp;
