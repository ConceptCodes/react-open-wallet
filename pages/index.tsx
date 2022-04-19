import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import PortfolioCard from '../components/cards/portfolio'
import AssetCard from '../components/cards/assets'

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
        <div className="flex">
          <section className="w-1/2">
            <h1 className="font-medium text-xl">Portfolio</h1>
            <PortfolioCard />
          </section>
          <section className="w-1/2">
            <h1 className="font-medium text-xl">Assets</h1>
            <div className="flex space-x-3">
              <AssetCard />
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
