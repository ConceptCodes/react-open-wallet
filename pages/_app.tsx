import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '@components/sidebar'
import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon],
  [
    alchemyProvider({ alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID ?? '' }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Open Wallet',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({ accentColor: '#023e8a' })}>
        <main className="flex flex-col lg:flex-row">
          <Sidebar />
          <section className="bg-white rounded-xl flex-grow my-5 mx-5 p-5 min-h-full">
            <div className="overflow-y-auto">
              <Component {...pageProps} />
            </div>
          </section>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
