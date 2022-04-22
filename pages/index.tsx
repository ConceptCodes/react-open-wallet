import type { NextPage } from 'next'
import Body from 'next';
import Head from 'next/head'
import Navbar from '@components/navbar'
import Sidebar from '@components/sidebar'
import PortfolioCard from '@components/cards/portfolio'
import { Markets } from '@/components/markets'
import { AssetCard } from '@components/cards/assets'
import { currency } from '@/enums/currency.enum'
import { AdjustmentsIcon } from '@heroicons/react/outline'


const _currency = currency.ETH;
const _balance = 231.456;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Open Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <Sidebar />
        <section className="flex-col bg-white rounded-xl flex-grow my-10 mx-5 p-5">
          <Navbar />
          <div className="flex space-x-4 py-10">
            <section className="w-1/2">
              <h1 className="section-title">Portfolio</h1>
              <PortfolioCard balance={_balance} currency={_currency} />
            </section>
            <section className="w-1/2">
              <div className="flex justify-between">
                <h1 className="section-title">Assets</h1>
                <AdjustmentsIcon className="h-5 text-gray-400 hover:primary-text cursor-pointer" />
              </div>
              <div className="flex space-x-4">
              <AssetCard
                  color="blue"
                  amt={0.45645}
                  currency={currency.BTC}
                />
                <AssetCard
                  color="blue"
                  amt={1.96345}
                  currency={_currency}
                />
              </div>
            </section>
          </div>
          <Markets />
        </section>
      </main>
    </>
  )
}

export default Home
