import { ApolloProvider } from '@apollo/client';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import client from '../appolo-client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isClientSide = router.pathname.includes('client-side');
  
  if (isClientSide) {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
  
  return <Component {...pageProps} />;
}

export default MyApp;
