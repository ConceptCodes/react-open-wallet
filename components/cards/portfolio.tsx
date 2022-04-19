import type { NextPage } from 'next'
import { DotsVerticalIcon } from '@heroicons/react/outline'
import { FunctionComponent } from 'react'

type IPortfolio = {
  balance: string
}

const PortfolioCard: NextPage = (FunctionComponent, {}) => {
  return (
    <article className="flex bg-blue-200">
           <section className="flex justify-between"> 
        <div className="flex-col">
          <h1 className="font-bold text-2xl uppercase">
            { props.balance }
            <span className="ml-2">{this.props.currency}</span>
          </h1>
          <h3 className="font-light text-gray-400">$3000</h3>
        </div>
        <DotsVerticalIcon className="h-5 text-gray-400" />
      </section>
    </article>
  )
}

export default PortfolioCard
