import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Html, Head, Main } from 'next/document'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ScrollProgress from '@/components/ScrollProgress'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[rgb(20,0,10)] text-white h-screen snap-y  overflow-scroll z-0 scroll-smooth'>
      
        <Header/>
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      <section id="about" className='snap-center'>
        <About/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>
      <section id='experience' className='snap-center'>
        <Experience/>
      </section>
      

     

      {/* Projects */}

      {/* Contact */}
    </main>
  )
}
