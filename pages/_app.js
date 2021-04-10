import Head from 'next/head'

import Layout from '@/components/Layout'
import '../styles/globals.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dev Connector</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
