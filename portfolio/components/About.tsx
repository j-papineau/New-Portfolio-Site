import React from 'react'
import Cards from './Cards'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
      <div>
        <motion.div
        initial={{opacity:0, x:-500}}
        whileInView={{opacity: 1, x:0}}
        transition={{ duration:1}}
        className='flex relative flex-col text-center md:text-left h-[110vh] text-slate-200 md:flex-row max-w-7xl p-5 justify-evenly mx-auto items-center'
        >
        <h3 className=' absolute top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>About Me</h3>
        <Image src="/images/fest.jpeg" alt='personal photo' className='mt-20 rounded-lg shadow-lg border hover:scale-150 duration-300'
          width={200}
          height={200}/>
        <p className='px-10 text-slate-300 tracking-wide'>Hello, my name is Joel Papineau. I have been programming for years, with a primary interest in
        data science and machine learning. Don't be deceived by this site, UI design is not my speciality, but I can make
        a pretty interface when necessary. My story with computers started when I could barely walk. I was lucky 
        enough to have a computer in my household I could freely use. While this may have not been the best idea for a young
        child, I quickly found myself wondering how all this stuff worked. So here we are now, where I have honed my skills 
        enough to create value with my own code, creating from apps to algos stuff that just works! (most of the time) </p>
        </motion.div>
       </div>
  )
}

export default About