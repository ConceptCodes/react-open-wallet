import React, { Component } from 'react';
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'

type IMarketData = {
  name: string;
  price: string;
  change: number;
  marketCap: number;
  watch?: boolean;
}

type MarketState = {
  highlighted: boolean;
}

const ICON_SIZE = 'h-8';

export class MarketRow extends Component<IMarketData, MarketState> {
  render() {
    return (
      <tr className="py-3">
        <td className="flex space-x-3">
          <Image src="https://via.placeholder.com/25" width={40} height={25} />
          <div className="flex-col">
            <h1 className="font-bold uppercase">{this.props.name}</h1>
            <h3 className="text-gray-400 capitalized text-xs">$SYMBL</h3>
          </div>
        </td>
        <td>${this.props.price}</td>
        <td>{this.props.change}%</td>
        <td>${this.props.change}</td>
        <td className="text-center">
          <StarIcon className={ this.props.watch ? `text-blue-600 ${ICON_SIZE}`: `text-gray-400 ${ICON_SIZE}` } />
        </td>
      </tr>
    )
  }
}