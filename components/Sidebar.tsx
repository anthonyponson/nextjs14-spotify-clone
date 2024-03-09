'use client'

import { HiHome, HiSearch } from 'react-icons/hi'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import Box from './Box'
import SidebarItem from './SidebarItem'



interface SidebarProps {
  children: React.ReactNode
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname()

  const routes = useMemo(
    () => [
      {
        icon: <HiHome />,
        label: 'Home',
        active: pathname !== '/search',
        href: '/',
      },
      {
        icon: <HiSearch />,
        label: 'Search',
        active: pathname === '/search',
        href: '/search',
      },
    ],
    [pathname]
  )

  return (
    <div className='flex h-full'>
      <div className='hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2'>
        <Box className='flex flex-col gap-y-4 px-5 py-4'>
          <div className='flex flex-col'>
            {routes.map(item => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className='overflow-y-auto h-full'>music</Box>
      </div>
    </div>
  )
}

export default Sidebar
