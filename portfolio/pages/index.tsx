import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Html, Head, Main } from 'next/document'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[rgb(20,0,20)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      
      {/* Header */}
        <Header/>
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </main>
  )
}
