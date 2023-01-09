import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/global';
import theme from 'styles/theme';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Time Tracking</title>
          <link rel="shortcut icon" href="/img/favicon-32x32.png" />
          <meta name="description" content="A time tracking dashborad" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
