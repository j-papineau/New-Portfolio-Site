import React from 'react'
import { Cursor, useTypewriter} from "react-simple-typewriter"
import { Typewriter } from 'react-simple-typewriter'
import BackgroundAnimation from './BackgroundAnimation'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {

    // const [text, count] = useTypewriter({
    //     words: ["Myself", "The World", "Your Company"],
    //     delaySpeed:2000,
    //     loop:true
    // });

  return (
    <div className='h-[120vh] flex flex-col space-y-4 items-center justify-center text-center overflow-hidden'>
        <BackgroundAnimation/>
        <Image className="relative rounded-full h-32 w-32 mx-auto object-cover" src="/images/headshot.jpg" alt="logo"
        height={400}
        width={400}></Image>

        <div className='z-20'>
          <h2 className='text-xl uppercase font-extrabold text-slate-300 tracking-[10px] pb-4'>Joel Papineau | Full-Stack Dev</h2>
          <h1 className='text-5xl lg:text-6xl'>
              <p className='text-xl text-slate-400 font-serif font-semibold'>Writing Software For:</p>
              <span className='text-slate-300 tracking-[4px]  mr-2'>
                  <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  words={["Machine Learning", "eCom", "Robotics", "Computer Vision", "Embedded Control"]}
                  />
              </span>
          </h1>
        </div>
       

        <div className="pt-5 z-20">
          <Link href="#about">
            <button className='heroButton'>About</button>
          </Link>
          <Link href="#skills">
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href="#experience">
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href="#education">
            <button className='heroButton'>Education</button>
          </Link>
          
          <Link href="#projects">
            <button className='heroButton'>Projects</button>
          </Link>
        </div>

        <div className="pt-5 z-20">
          <Link href="/contact">
            <button className='heroButton'>Contact Me</button>
          </Link>
          <Link href="/contact">
            <button className='heroButton'>Download Resume</button>
          </Link>
        </div>
    

    </div>
  )
}

export default Hero