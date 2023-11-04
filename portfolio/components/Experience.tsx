import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ExperienceCarousel from './ExperienceCarousel'


type Props = {}

const Experience = (props: Props) => {

  const adrPoints = ["Design and Maintain Website Functionality On Wordpress.com Platform", "Develop and maintain tools for digital advertisement \
  platform monitoring, decisionmaking, and planning", "Embedded design for PCB structures using VHDL and EAGLE"];
  const adrSkills = ["js.png", "php.png", "innoDB.png", "next.png", "react.png"]
  const targetPoints = ["Receive and document incoming freight shipments", "Schedule inbound trailers and ensure timely unload \
  ", "Manage vendor relations including receiving merchandise, setting seasonal sales planners, and settle product inventory"]

  return (
    <div 
    className='h-[110vh] flex flex-col items-center'>
      <div>
        <h3 className='pt-20 top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>Experience</h3>
      </div>
        
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard 
            hasSkillsSection={true}
            imgURL={"/images/adr.png"}
            title={"Embedded Design Engineer"} 
            company={"ADR, LLC."}
            start={"April 04, 2023"} 
            end={"Current"}
            points= {adrPoints} 
            skillsURLs={adrSkills}/>
            <ExperienceCard
            hasSkillsSection={false}
            imgURL={"/images/targetlogo-6.jpeg"}
            title={"Receiving Expert"}
            company={"Target"}
            start={"August 2021"}
            end={"April 2023"}
            points={targetPoints}
            />
            <ExperienceCard
            hasSkillsSection={false}
            imgURL={"/images/kbi.jpeg"}
            title={"Beverage and CO2 Technician"}
            company={"Ken's Beverage Inc."}/>
            <ExperienceCard
            hasSkillsSection={false}
            imgURL={"/images/futures.jpeg"}
            title={"Commercial/Residential Electrical Apprentice"}
            company={"Futures Electrical"}
            />
        </div>
    </div>
  )
}

export default Experience