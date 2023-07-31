import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Html, Head, Main } from 'next/document'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ScrollProgress from '@/components/ScrollProgress'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[rgb(20,0,20)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      
      {/* Header */}
        {/* <ScrollProgress/> */}
        <Header/>
      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>
      {/* Experience */}

     

      {/* Projects */}

      {/* Contact */}
    </main>
  )
}
