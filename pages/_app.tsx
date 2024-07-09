import type { AppProps } from 'next/app';
import { metaColorForPath } from '../src/theme';
import Script from 'next/script';
import { useRouter } from 'next/router';
import AppContext from '../src/app/AppContext';
import Header from '../src/components/Header';
import Head from 'next/head';
import Footer from '../src/components/Footer';
import useHasAppLoaded from '../src/utility/useHasAppLoaded';
import useGoogleTranslate from '../src/utility/useGoogleTranslate';
import { pageTitleForCompetency, SITE_DESCRIPTION } from '../src/app/content';
import { getCompetencyForPath } from '../src/app/path';
import Favicons from '../src/app/Favicons';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const competency = getCompetencyForPath(asPath);

  const hasLoaded = useHasAppLoaded();

  const callbackKey = useGoogleTranslate();

  return (
    <>
      <Head>
        <title>{pageTitleForCompetency(competency)}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="theme-color" content={metaColorForPath(asPath)} />
      </Head>
      <Favicons />
      <Script
        type="text/javascript"
        src={`//translate.google.com/translate_a/element.js?cb=${callbackKey}`}
      />
      <AppContext.Provider value={{ hasLoaded }}>
        <Header />
        <main className="mb-16">
          <Component {...pageProps} />
        </main>
        <Footer className="mb-12" />
      </AppContext.Provider>
    </>
  );
}

export default MyApp;
