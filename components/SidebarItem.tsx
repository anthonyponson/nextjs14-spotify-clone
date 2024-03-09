import Link from 'next/link'
import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge'

interface SidebarItemsProps {
  label: string
  icon: IconType
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemsProps> = ({
  label,
  icon,
  active,
  href,
}) => {
  return (
    <>
      <Link
        href={href}
        className={twMerge(
          `flex items-center h-auto w-full gap-x-4 text-base font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1`,
          active && 'text-white'
        )}
      >
        {label}
      </Link>
    </>
  )
}

export default SidebarItem
