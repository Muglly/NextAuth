import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../../chakra.theme';

import { GlobalStyles } from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Time Tracking</title>

        <link rel="shortcut icon" href="/img/favicon-32x32.png" />

        <meta name="description" content="A time tracking dashborad" />
      </Head>
      <GlobalStyles />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
