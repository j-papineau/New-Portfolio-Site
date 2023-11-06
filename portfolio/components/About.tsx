import React from 'react'
import Cards from './Cards'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
      <div className='flex flex-col relative justify-center align-middle items-center'>
        <Image
        className=''
        alt='me in the gym'
        src={"/./images/pers-img.jpg"}
        width={300}
        height={300}
        />
        <h3 className='op-24 uppercase tracking-[10px] text-slate-300 text-4xl justify-center py-10'>About Me</h3><br />
        <p className='px-10 text-slate-300 tracking-wide w-[500px]'>Hello, my name is Joel Papineau. I am a senior Computer Science student at the University of North Florida, living in Ormond Beach, FL. I have been programming for years, with a primary interest in
        data science, embedded systems and machine learning. Don't be deceived by this site, UI design is not my speciality, but I can make
        a pretty interface when necessary. My story with computers started when I could barely walk. I was lucky 
        enough to have a computer in my household I could freely use. While this may have not been the best idea for a young
        child, I quickly found myself wondering how all this stuff worked. So here we are now, where I have honed my skills 
        enough to create value with my own code, creating from apps to algos stuff that just works! (most of the time) </p>
      </div>
  )
}

export default About