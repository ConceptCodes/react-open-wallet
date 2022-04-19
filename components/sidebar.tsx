import type { NextPage } from 'next'
import { CurrencyDollarIcon, MenuAlt1Icon, ChartBarIcon, UserIcon, LogoutIcon  } from '@heroicons/react/outline'

const Sidebar: NextPage = () => {
  return (
    <article className="flex flex-col p-3 items-center justify-around h-screen">
        <figure className="flex h-20 w-20 bg-purple-600 items-center rounded-full justify-center">
            <CurrencyDollarIcon className="h-10 text-white" />
        </figure>
        <div className="flex-col space-y-6">
          <MenuAlt1Icon className="menu-icon" />
          <ChartBarIcon className="menu-icon" />
          <UserIcon className="menu-icon" />
        </div>
        <LogoutIcon className="menu-icon" />
    </article>
  )
}

export default Sidebar
