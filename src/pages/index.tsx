import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './Hero/Hero'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen min-w-screen bg-grey ${inter.className}`}
    >
      <Hero />
    </main>
  )
}
