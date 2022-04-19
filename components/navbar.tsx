import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'

const Navbar: NextPage = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-black">Overview</h1>
      <div className="flex space-x-3 items-center">
        <figure className="navbar-icon">
          <SearchIcon className="text-black hover:text-white h-5" />
        </figure>
        <figure className="navbar-icon">
          <BellIcon className="text-black hover:text-white h-5" />
        </figure>
        <figure className="bg-gray-200 flex space-x-3 h-12  items-center p-3 rounded-full">
          <Image
            className="rounded-full -translate-y-3"
            src="https://source.unsplash.com/100x100/?portrait"
            width={50}
            height={50}
          />
          <h2 className="font-medium text-md">Username</h2>
        </figure>
      </div>
    </div>
  )
}

export default Navbar
