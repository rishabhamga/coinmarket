import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { GunProvider } from '../context/gunContext'
import { CoinMarketProvider } from '../context/context'
import { AppProps } from 'next/app';



function MyApp({Component, pageProps}: AppProps) {
  return (
    <MoralisProvider
      serverUrl='https://crgblcpkrta7.usemoralis.com:2053/server'
      appId='3NBpsg10JuFpT6hKXyBZYwxBoaHQLWjFvU8UFitr'
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  )
}

export default MyApp

