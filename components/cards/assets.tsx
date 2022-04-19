import type { NextPage } from 'next'
import { currency } from '../../enums/currency.enum'

interface AssestProps  {
  color: string;
  amt: number;
  currency: currency;
}

const AssetCard: NextPage = ({  }) => {
  const { color, amt, currency } = props;
  return (
    <article className={`flex bg-${props.color}-200`}>
     
    </article>
  )
}

export default AssetCard
