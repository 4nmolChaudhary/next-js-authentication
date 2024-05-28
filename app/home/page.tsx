'use client'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function Home() {
  const data = useSession()
  const imageURL = (data?.data?.user?.image as string) || ''
  console.log(data)
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <h1 className='text-2xl font-semibold tracking-tight'>🏠</h1>
      <h3 className='text-xl font-semibold '>Home</h3>
      {data?.data?.user && (
        <>
          <p className='text-sm text-muted-foreground mb-4'>{data?.data?.user?.name}</p>
          <Image src={imageURL} width={500} height={500} alt='Picture of the author' />
          <button onClick={() => signOut()} className='w-full mt-2 inline-flex items-center justify-center text-sm font-bold bg-black text-white h-10 py-2 px-4 disabled:opacity-50'>
            LOG OUT
          </button>
        </>
      )}
    </div>
  )
}
