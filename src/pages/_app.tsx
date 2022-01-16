import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/base.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const renderApp = () => {
    return <Component {...pageProps} />;
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta content="Goc cua Thi" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta name="description" content="Goc cua Thi" />
      </Head>
      {renderApp()}
    </>
  );
};

export default MyApp;
