import React from 'react';
import Head from 'next/head';
// import '../styles/global.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Layout from '../components/Layout/Layout';
import wrapper from '../common/redux/stores/store';
config.autoAddCss = false;
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/reset';
import theme from '../styles/theme';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>Algorithm Gallery</title>
    </Head>
    <Layout>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  </>
);

export default wrapper.withRedux(App);
