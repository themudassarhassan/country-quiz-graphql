import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';
import type { AppProps } from 'next/app';
import client from '../appolo-client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isClientSide = router.pathname.includes('client-side');
  const gtmParams = { id: 'GTM-MSCKRX9' };
  
  
  if (isClientSide) {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
  
  return (
    <GTMProvider state={gtmParams}>
      <Component {...pageProps} />    
    </GTMProvider>
  );
}

export default MyApp;
