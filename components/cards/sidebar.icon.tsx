import Link from 'next/link'
import { ISidebarIcon } from '@/types'

export function SideBarIcon({ page, icon }: ISidebarIcon ) {
  return (
    <Link href={`/${page}`} data-tooltip-target="tooltip-right" data-tooltip-placement="right">
      <a>
        <div id="tooltip-right" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm capitalize font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
          { page }
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <div>{icon}</div>
      </a>
    </Link>
  );
}