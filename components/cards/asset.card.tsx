import { DotsVerticalIcon } from '@heroicons/react/outline';
import React, { useState } from 'react'
import Image from 'next/image'
import { IAssest, AssetState } from '@/types'

export const AssetCard = (props: IAssest) => {
  const { amt, color, currency } = props;
  const bg = `bg-${color}-200 flex-col w-full h-[300px] relative rounded-xl cursor-pointer p-3`;
    return (
      <article className={bg}>
      <section className="flex justify-between"> 
        <div className="flex-col">
          <h1 className="font-bold text-2xl uppercase">
            { amt }
            <span className="ml-2">{currency}</span>
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

