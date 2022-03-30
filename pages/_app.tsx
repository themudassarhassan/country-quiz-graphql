import { ApolloProvider } from '@apollo/client';
import App from 'next/app';

import { randomBytes } from 'crypto';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';
import type { AppContext, AppProps } from 'next/app';
import client from '../appolo-client';
import '../styles/globals.css';

function getCSP(nonce: string) {
  const contentSecurityPolicy = `
    script-src 'self' '${process.env.NODE_ENV === 'development' ? 'unsafe-eval' : ''}' 'nonce-${nonce}' https://www.googletagmanager.com;
    object-src 'none';  
  `;
  return contentSecurityPolicy .replace(/\s{2,}/g, ' ').trim();
}

function generateNonce() {
  return randomBytes(12).toString('base64');
}

function MyApp({ Component, pageProps, nonce }: AppProps & { nonce: string }) {
  const router = useRouter();
  const isClientSide = router.pathname.includes('client-side');
  
  const gtmParams = { id: 'GTM-MSCKRX9', nonce: nonce };

  if (isClientSide) {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
  
  return (
    <>
      <Head>
        <title>My country quiz</title>
        <meta name="description" content="This is a beautiful country quiz application." />
        {/* <meta httpEquiv="Content-Security-Policy" content={csp}  /> */}
      </Head>
      <GTMProvider state={gtmParams}>
        <Component {...pageProps} />    
      </GTMProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const nonce = generateNonce();
  const csp = getCSP(nonce);
  const res = appContext.ctx?.res;
  if (res != null) {
    res.setHeader('Content-Security-Policy', csp);
  }

  return { ...appProps, nonce };
};

export default MyApp;
