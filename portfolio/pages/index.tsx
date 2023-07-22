import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Html, Head, Main } from 'next/document'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      <div className='text-8xl'>
        Hello
      </div>
    </main>
  )
}
