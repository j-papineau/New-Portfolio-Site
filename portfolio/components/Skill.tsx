import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
    srcURL: string,
    years: any,
}

const Skill = ({directionLeft, srcURL, years}: Props) => {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img 
        initial={{
            x: directionLeft ? -100 : 100,
            opacity:0
        }}
        transition={{}}
        whileInView={{opacity: 1, x: 0}}
        src={srcURL}
        className='rounded-full border-slate-600 object-cover w-24 h-24 lg:w-32 lg:h-32 
        filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in
        group-hover:bg-white h-24 w-24 lg:h-32 lg:w-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-slate-800 opacity-100'>{years} yr.</p>
            </div>
        </div>
    </div>
  )
}

export default Skill