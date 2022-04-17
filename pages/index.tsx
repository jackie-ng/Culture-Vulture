import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './Header'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Culture Vulture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className='flex justify-between items-center bg-yellow-400 py-10'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'><span className='underline decoration-black decoration-4'>Culture Vulture</span> is a place to write, read and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with millions of reader.</h2>
        </div>
        <div>
          <h1 className='hidden md:inline-flex h-32 lg:h-full animate-bounce text-9xl font-black text-black mr-9' >CV</h1>
        </div>
      </div>

      {/* POSTS */}

    </div>
  )
}

export default Home
