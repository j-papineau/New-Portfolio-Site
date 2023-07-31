import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='h-[110vh] flex relative flex-col text-center md:text-left xl:flex-row max-w-[1000px]
    min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>Skills</h3>
    
    <h3 className='absolute top-36 uppercase tracking-[3px] text-slate-400 text-sm '>Hover skill for more info</h3>
    
    <div className='grid grid-cols-4 gap-5'>
        <Skill directionLeft={true} srcURL={"/images/langs/php.png"} years={2} />
        <Skill directionLeft={true} srcURL={"/images/langs/java.png"} years={3} />
        <Skill directionLeft={false} srcURL={"/images/langs/javafx.png"} years={1} />
        <Skill directionLeft={false} srcURL={"/images/langs/js.png"} years={2} />
        <Skill directionLeft={true} srcURL={"/images/langs/next.png"} years={1} />
        <Skill directionLeft={true} srcURL={"/images/langs/react.png"} years={1} />
        <Skill directionLeft={false} srcURL={"/images/langs/tailwind.png"} years={1} />
        <Skill directionLeft={false} srcURL={"/images/langs/typescript.png"} years={1} />
        <Skill directionLeft={true} srcURL={"/images/langs/unreal.png"} years={.5} />
        <Skill directionLeft={true} srcURL={"/images/langs/c.png"} years={3} />
        
    </div>
    </motion.div>
  )
}

export default Skills