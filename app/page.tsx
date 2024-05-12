export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 '>
      <div className='z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white'>
        <div className='grid gap-2 grid-cols-5 grid-rows-5'>
          {[...Array(25)].map((_, index) => (
            <div className='rounded w-20 h-20 bg-black text-white flex items-center justify-center' key={index}>
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

