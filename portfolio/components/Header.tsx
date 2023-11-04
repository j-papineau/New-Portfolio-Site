import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion, useScroll} from "framer-motion";

type Props = {}

function Header({}: Props) {
 
    const {scrollYProgress} = useScroll();
 
    return (

    <header className='sticky top-0 flex items-start justify-between max-w-3xl mx-auto
    z-20 xl:items-center p-5'>   

        <motion.div 

        initial={{
            x:-500,
            opacity: 0,
            scale: 0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1,
        }}
        
        className='flex row items-center'>

            {/* Icons */}
            <SocialIcon url="https://github.com/j-papineau" 
            fgColor='white' 
            bgColor='transparent'/>
            <SocialIcon url="https://www.linkedin.com/in/joel-papineau-58a4801b4"
            fgColor='white'
            bgColor='transparent'/>

        </motion.div>

        <motion.div 
        
        initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1
        }}
        className='flex flex-rox items-center text-gray-200 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='white'
            bgColor='transparent'
            url='/contact'/>
            {/* <p className=' hidden md:inline-flex text-sm text-gray-200'>Shoot me an email!</p> */}
            <SocialIcon
            className='cursor-pointer'
            fgColor='white'
            bgColor='transparent'
            label="Resume"/>
            <p className='hidden md:infline-flex text-sm text-gray-200'>Download My Resume</p>
        </motion.div>
    </header>
    
  )
}

export default Header