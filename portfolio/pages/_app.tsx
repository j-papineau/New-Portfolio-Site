import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import "../styles/carousel.css"
import "keen-slider/keen-slider.min.css"




export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Joel Papineau | Full-Stack Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
