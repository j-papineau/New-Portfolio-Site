import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Html, Head, Main } from 'next/document'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[rgb(36,36,36)] text-white h-screen'>
      
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id='hero'>
        <Hero/>
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </main>
  )
}
