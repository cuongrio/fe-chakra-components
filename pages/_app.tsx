import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import defaultSEOConfig from '../next-seo.config';
import { theme } from '../theme';

import '@fontsource/inter';
import { AccentGlobal } from '../theme/accent';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider colorModeManager={localStorageManager} theme={theme}>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <AccentGlobal />
      <DefaultSeo {...defaultSEOConfig} />

      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
