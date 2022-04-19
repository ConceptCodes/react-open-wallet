import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import PortfolioCard from '../components/cards/portfolio'
import { AssetCard } from '../components/cards/assets'
import { currency } from '@/enums/currency.enum'
import { AdjustmentsIcon } from '@heroicons/react/outline'

const assets = [
  {

  }
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen py-2 bg-neutral-900">
      <Head>
        <title>Open Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* sidebar */}
      <Sidebar />
      {/* end sidebar */}
      {/* main secion */}
      <main className="flex-col bg-white rounded-xl flex-grow my-10 mx-5 p-5">
        <Navbar />
        <div className="flex py-10">
          <section className="w-1/2">
            <h1 className="section-title">Portfolio</h1>
            <PortfolioCard />
          </section>
          <section className="w-1/2">
            <div className="flex justify-between">
              <h1 className="section-title">Assets</h1>
              <AdjustmentsIcon className="h-5 text-black" />
            </div>
            <div className="flex space-x-3">
            <AssetCard
                color="blue"
                amt={0.45645}
                currency={currency.BTC}
              />
              <AssetCard
                color="blue"
                amt={1.96345}
                currency={currency.ETH}
              />
            </div>
          </section>
        </div>
      </main>
      {/* end of main section */}
      <footer className="">

      </footer>
    </div>
  )
}

export default Home
