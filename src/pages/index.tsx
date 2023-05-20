import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from './Landing/Landing'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={` min-h-screen min-w-screen bg-grey ${inter.className}`}
    >
      <Landing />
    </main>
  )
}
