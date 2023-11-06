import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='h-[110vh] flex flex-col text-center md:text-left xl:flex-col max-w-[1000px]
    min-h-screen xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='uppercase tracking-[10px] text-slate-300 text-4xl'>Software Technology</h3>
    
    <h3 className='top-36 uppercase tracking-[3px] text-slate-400 text-sm pb-10'>Hover skill for more info</h3>
    
    <div className='grid grid-cols-4 gap-5'>
        <Skill directionLeft={true} srcURL={"/images/langs/php.png"} years={"PHP"} />
        <Skill directionLeft={true} srcURL={"/images/langs/java.png"} years={"JAVA"} />
        <Skill directionLeft={true} srcURL={"/images/langs/cpp.png"} years={"C++"} />
        <Skill directionLeft={true} srcURL={"/images/langs/tf.png"} years={"TensorFlow"} />
        <Skill directionLeft={true} srcURL={"/images/langs/opencv.png"} years={"OpenCV"} />
        <Skill directionLeft={true} srcURL={"/images/langs/python.png"} years={"Python"} />
        <Skill directionLeft={true} srcURL={"/images/langs/javafx.png"} years={"JavaFX"} />
        <Skill directionLeft={true} srcURL={"/images/langs/js.png"} years={"JavaScript"} />
        <Skill directionLeft={true} srcURL={"/images/langs/next.png"} years={"Next.js"} />
        <Skill directionLeft={true} srcURL={"/images/langs/react.png"} years={"React"} />
        <Skill directionLeft={true} srcURL={"/images/langs/tailwind.png"} years={"Tailwind CSS"} />
        <Skill directionLeft={true} srcURL={"/images/langs/typescript.png"} years={"TypeScript"} />
        <Skill directionLeft={true} srcURL={"/images/langs/unreal.png"} years={"Unreal Engine"} />
        <Skill directionLeft={true} srcURL={"/images/langs/c.png"} years={"C"} />
        <Skill directionLeft={true} srcURL={"/images/langs/arduino-logo.png"} years={"Arduino"} />
        <Skill directionLeft={true} srcURL={"/images/langs/esp.png"} years={"ESP32/ESP8266"} />
        
    </div>
    </div>
  )
}

export default Skills