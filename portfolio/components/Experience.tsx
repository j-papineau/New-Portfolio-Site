import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
    className='h-[110vh] flex relative overflow-hidden flex-col text-left md:flex-row px-10 justify-evenly
    mx-auto items-center'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}>
        <h3 className='pt-10 absolute top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>My History</h3>
        
        <div>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default Experience