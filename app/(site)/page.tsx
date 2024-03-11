import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-neutral-900 h-full w-full rounded-lg overflow-hidden overflow-y-auto '>
      <Header>
        <div className='mt-2'>
          <h2 className='text-2xl font-semibold'>welcome back</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
            <ListItem name='Liked Songs' href='likedsongs' />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text2xl font-semibold">
            Newest Songs
          </h1>
        </div>
      </div>
    </div>
  )
}
