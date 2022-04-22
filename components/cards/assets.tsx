import { DotsVerticalIcon } from '@heroicons/react/outline';
import React, { Component } from 'react'
import { currency } from '@enums/currency.enum'
import Image from 'next/image'
import { CoinGeckoClient } from 'coingecko-api-v3';

type IAssest = {
  color: string;
  amt: number;
  currency: currency;
}

type AssetState = {
  fiatBalance: string
}


export class AssetCard extends Component<IAssest, AssetState> {
  client = new CoinGeckoClient({
  timeout: 10000,
  autoRetry: true,
});

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.

  calcFiatBalance = async() => {
    try {
      const data = await this.client.simplePrice({ vs_currencies: "USD", ids: this.props.currency  })
      this.setState({
        fiatBalance: Math.floor(data[this.props.currency].usd * this.props.amt).toFixed(2)
      })
    } catch(err) {
      console.error(err)
    }
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    this.calcFiatBalance();
  }

  // render will know everything!
  render() {
    return (
      <article className={`flex-col bg-${this.props.color}-200 w-full h-[300px] relative rounded-xl cursor-pointer p-3`}>
      <section className="flex justify-between"> 
        <div className="flex-col">
          <h1 className="font-bold text-2xl uppercase">
            { this.props.amt }
            <span className="ml-2">{this.props.currency}</span>
          </h1>
          <h3 className="font-light text-gray-400">$3000</h3>
        </div>
        <DotsVerticalIcon className="h-5 text-gray-400" />
      </section>
      <section className="flex justify-between items-center absolute inset-x-0 bottom-0 p-5">
        <figure className="bg-white rounded-xl p-3">
          <Image 
            src="https://via.placeholder.com/50"
            width={30}
            height={30}
          />
        </figure>
        <h2 className="text-green-500 font-medium text-md">+ 0.56</h2>
      </section>
    </article>
    )
  }
}

