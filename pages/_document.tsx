import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

// function getCSP(nonce: string) {
//   const contentSecurityPolicy = `
//     script-src 'self' '${process.env.NODE_ENV === 'development' ? 'unsafe-eval' : ''}' 'nonce-${nonce}' https://www.googletagmanager.com;
//     object-src 'none';  
//   `;
//   return contentSecurityPolicy .replace(/\s{2,}/g, ' ').trim();
// }

// function generateNonce() {
//   return '87akkadkfa9a8fasfka';
// }

class MyDocument extends Document {
  
  
  render() {
    
    return (
      <Html>
        <Head /> 
        <body>
          <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
