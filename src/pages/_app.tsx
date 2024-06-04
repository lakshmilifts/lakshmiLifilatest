
import "@/styles/globals.css";
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
   
            <Suspense>
                <Head>
                    <title>Lakshmi Lift</title>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
               
                    <Component {...pageProps} />
                
            </Suspense>
    );
}

