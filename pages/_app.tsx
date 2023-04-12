import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '../modules/store';
import GlobalStyle from '../src/styles/global-styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
