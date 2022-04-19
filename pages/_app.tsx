import GlobalStyle from '../styles/global-styles';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../modules/store';
import { BrowserRouter } from 'react-router-dom';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Component {...pageProps} />
      </BrowserRouter>
    </Provider>
  );
}

export default MyApp;
