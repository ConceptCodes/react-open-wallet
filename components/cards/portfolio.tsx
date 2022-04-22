import type { NextPage } from 'next'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { currency } from '@enums/currency.enum'
import React, { Component } from 'react'

type IPortfolio = {
  balance: number,
  currency: currency
}

type PortfolioState = {

}
export class PortfolioCard extends Component<IPortfolio, PortfolioState> {
  render() {
    return (
      <article className="flex-col bg-blue-200 rounded-xl p-5 h-[300px]">
        <section className="flex justify-between"> 
          <div className="flex-col">
            <h1 className="font-bold text-2xl uppercase">
              2345.56487
              <span className="ml-2">BTC</span>
            </h1>
            <h3 className="font-light capitalize">Portfolio Balance</h3>
          </div>
          <DotsVerticalIcon className="h-5 text-gray-400" />
        </section>
      </article>
    )
  }
}

export default PortfolioCard
