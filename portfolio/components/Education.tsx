import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ExperienceCarousel from './ExperienceCarousel'


type Props = {}

const Education = (props: Props) => {

  const unfPoints = ["UNF ML Club"]

  return (
    <div 
    className=' flex flex-col items-center'>
      <div>
        <h3 className='pt-40 top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>Education</h3>
      </div>
        
        <div className='w-[100%] h-[80%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard 
            hasSkillsSection={false}
            imgURL={"/images/unf.png"}
            title={"Computer Science BS"} 
            company={"University of North Florida"}
            start={""} 
            end={"In Progress"}
            points= {[]} 
            />
            <ExperienceCard 
            hasSkillsSection={false}
            imgURL={"/images/dsc.png"}
            title={"Associate Degree"} 
            company={"Daytona State College"}
            start={""} 
            end={"Completed"}
            points= {[]} 
            />
            <ExperienceCard 
            hasSkillsSection={false}
            imgURL={"/images/bdale.png"}
            title={"High School Diploma"} 
            company={"Bloomingdale Senior High"}
            start={""} 
            end={"Completed"}
            points= {["AFJROTC", "FIRST Robotics Club", "Band Drum Major (2yr)"]} 
            />
            
        </div>
    </div>
  )
}

export default Education