import type { NextPage } from 'next'
import { QrcodeIcon, MenuAlt1Icon, ChartBarIcon, UserIcon, LogoutIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { SideBarIcon } from '@components/cards/sidebar.icon'

const Sidebar: NextPage = () => {

  return (
    <section className="flex lg:flex-col p-3 max-h-full items-center justify-between">
      <Link href="/">
        <figure className="flex cursor-pointer h-20 w-20 primary-bg items-center rounded-full justify-center">
          <QrcodeIcon className="h-10 text-white" />
        </figure>
      </Link>
      <div className="flex flex-col lg:space-y-6">
        <SideBarIcon page="gallery" icon={<MenuAlt1Icon className="menu-icon" />} />
      </div>
    </section>
  )
}

export default Sidebar
