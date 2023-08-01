import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
      <motion.img src='/images/adr.png'/>
    </article>
  )
}

export default ExperienceCard