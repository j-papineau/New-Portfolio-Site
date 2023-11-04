import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { start } from 'repl'

type Props = {
  title?: String,
  start: String,
  end: String,
  company: String,
  imgURL?: string,
  points?: string[],
  hasSkillsSection: boolean,
  skillsURLs?: string[] 

}

const ExperienceCard = ( {title, start, end, company, imgURL, points, hasSkillsSection, skillsURLs}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-800 p-10'>
      <img
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover
      object-center'
      src={imgURL}/>

      <div className='px-0 md:px-10 '>
        <h4 className='text-3xl font-light italic '>{title}</h4>
        <p className='font-bold text-2xl mt-1'>{company}</p>
        <div className='flex space-x-2 my-2'>
          { hasSkillsSection ? (<>
            {
              skillsURLs?.map((url) => (
                <img src={`/images/langs/${url}`} alt="" 
                className='h-10 w-10 rounded-full object-cover'/>
              ))
            }
          </>) : (<></>)
          }
        </div>

        <p className='py-5 uppercase font-light text-gray-300 tracking-wide'>{start} - {end}</p>

        <ul className='list-disc space-y-4 ml-5 text-light text-gray-300 tracking-wide'>
          {points?.map((point) => (
            <li key={`${point}`} className=''>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard