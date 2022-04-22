import React, { Component } from 'react'
import { MarketRow } from '@/components/cards/marketRow'

export class Markets extends Component {
  render() {
    return (
      <section>
        <h1 className="section-title font-black py-3">
          Market is down 0.86%
        </h1>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Change</th>
              <th>Market Cap</th>
              <th>Watch</th>
            </tr>
          </thead>
          <tbody className="space-y-3">
            <MarketRow
              name="ethereum"
              price="2"
              change={3.45}
              marketCap={343523}
              watch
            />
            <MarketRow
              name="bitcoin"
              price="2"
              change={3.45}
              marketCap={343523}
            />
          </tbody>
        </table>
      </section>
    );
  }
}