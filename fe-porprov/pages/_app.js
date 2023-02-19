import '../styles/globals.css'
import Context from '../context/context'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KAYPANG SILAT SPORT</title>
        <link rel="shortcut icon" type="image/png" href="/images/logo_new.png" />
      </Head>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  )
}

export default MyApp
