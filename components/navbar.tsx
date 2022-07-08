import { SearchIcon, BellIcon } from '@heroicons/react/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Navbar = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-6xl lg:text-8xl font-black">Overview</h1>
      <div className="flex space-x-3 items-center">
        <figure className="navbar-icon">
          <SearchIcon className="text-black h-5" />
        </figure>
        <figure className="navbar-icon">
          <BellIcon className="text-black h-5" />
        </figure>
        <ConnectButton chainStatus="icon" showBalance={false} />
      </div>
    </div>
  )
}

export default Navbar
