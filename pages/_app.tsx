import GlobalStyle from '../styles/global-styles';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../modules/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
