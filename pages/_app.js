import Head from 'next/head'
import { ToastProvider } from 'react-toast-notifications';

import Layout from '@/components/Layout'
import { AuthProvider } from '@/lib/auth';

import '../styles/globals.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ToastProvider>
        <Head>
          <title>Dev Connector</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </AuthProvider>
  )
}

export default MyApp
