import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import ExperienceCarousel from './ExperienceCarousel'


type Props = {}

const Experience = (props: Props) => {

  const adrPoints = ["Design and Maintain Website Functionality On Wordpress.com Platform", "Perform daily and quarterly duties to ensure success on Google Ads Platform", "Get involved with creative ad work like blogs and strategies to generate organic traffic to sites", "Make sense of analytics numbers, aiding in decisionmaking \
  by digesting figures (Cost per Lead, Cost per Click, Return on Spend, etc.) "];
  const adrSkills = ["js.png", "php.png", "innoDB.png", "next.png", "react.png"]
  const targetPoints = ["Receive and document incoming freight shipments", "Schedule inbound trailers and ensure timely unload \
  ", "Manage vendor relations including receiving merchandise, setting seasonal sales planners, and settle product inventory"]
  const kbiPoints = ["Service and maintain Coca-Cola Machines (Freestlye Machine, FreeFlow Fountain, etc)", "Fix and diagnose various problems with beverage \
  equipment of various manufactureres including: Hojisaka, Coke, Pepsi, BevTech, Epsilon, etc.", "Installing and servicing McDonald's ABS systems"];
  const futuresPoints = ["Install and service commercial/residential equipment from panels to recipticals", "Learn and understand electrical plans \
  from various manufacturers (Duke, Siemanns) "]

  return (
    <div 
    className='h-[110vh] flex flex-col items-center'>
      <div>
        <h3 className='pt-20 top-24 uppercase tracking-[10px] text-slate-300 text-4xl'>Experience</h3>
      </div>
        
        <div className='w-[100%] h-[80%] flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard 
            hasSkillsSection={true}
            imgURL={"/images/adr.png"}
            title={"Digital Marketing Support"} 
            company={"ADR"}
            start={"April 04, 2023"} 
            end={"Current"}
            points= {adrPoints} 
            skillsURLs={adrSkills}/>
            <ExperienceCard
            hasSkillsSection={false}
            imgURL={"/images/targetlogo-6.jpeg"}
            title={"Receiving Expert"}
            company={"Target"}
            start={"August 2022"}
            end={"April 2023"}
            points={targetPoints}
            />
            <ExperienceCard
            hasSkillsSection={false}
            imgURL={"/images/kbi.jpeg"}
            title={"Beverage and CO2 Technician"}
            company={"Ken's Beverage Inc."}
            start={"-"}
            end={"-"}
            points={kbiPoints}/>
            <ExperienceCard
            hasSkillsSection={false}
            imgURL={"/images/futures.jpeg"}
            title={"Commercial/Residential Electrical Apprentice"}
            company={"Futures Electrical"}
            start={"April 2020"}
            end={"August 2021"}
            points={futuresPoints}
            />
        </div>
    </div>
  )
}

export default Experience