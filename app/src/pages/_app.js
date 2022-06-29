import React from 'react';
import Head from 'next/head';
import '../styles/global.css';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atelier-cave-dark.min.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <title>Algorithm Gallery</title>
        </Head>
        <Component {...pageProps} />
    </>
);

export default App;