import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import Layout from "../components/Layout";

// u can wrap something around any page/component here..
export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
