import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-5N8PSCCVXZ" />
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-5N8PSCCVXZ');
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
