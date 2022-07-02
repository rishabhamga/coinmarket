import CMCtable from '../components/cmc-table/cmcTable'
import Header from '../components/header'
import Trending from '../components/trending'
import SwapCryptoModal from '../components/swapCryptoModesls'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Header />
      <SwapCryptoModal />
      <div className='mt-10' />
      <Trending />
      <div className='mt-20' />
      <CMCtable />
    </div>
  )
}
