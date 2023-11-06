import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='h-30 flex relative flex-col text-center md:text-left xl:flex-row max-w-[1000px]
    min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
       <h3 className='absolute top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>Projects</h3>
    
        <h3 className='absolute top-36 uppercase tracking-[3px] text-slate-400 text-sm '>Coming Soon</h3>
    
    </div>
  )
}

export default Projects