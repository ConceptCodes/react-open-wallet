import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '@components/navbar'
import PortfolioCard from '@/components/cards/portfolio.card'
import { Markets } from '@/components/markets'
import { AssetCard } from '@/components/cards/asset.card'
import { currency } from '@/enums/currency.enum'
import { AdjustmentsIcon } from '@heroicons/react/outline'

const Home: NextPage = () => {
  const _currency = currency.ETH;
  const _balance = 231.456;
    return (
      <>
        <Head>
          <title>Open Wallet</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="flex space-x-4 py-10">
          <section className="w-full lg:w-1/2">
            <h1 className="section-title">Portfolio</h1>
            <PortfolioCard balance={_balance} currency={_currency} />
          </section>
          <section className="lg:w-1/2">
            <div className="flex justify-between">
              <h1 className="section-title">Assets</h1>
              <AdjustmentsIcon className="h-5 text-gray-400 hover:primary-text cursor-pointer" />
            </div>
            <div className="flex space-x-4">
              <AssetCard
                color="purple"
                amt={0.45645}
                currency={currency.BTC}
              />
              <AssetCard
                color="green"
                amt={1.96345}
                currency={_currency}
              />
            </div>
          </section>
        </div>
        <Markets />
      </>
    )
}

export default Home
