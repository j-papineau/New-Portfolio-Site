import React from 'react'
import { Input, Button, IconButton, Icon } from '@chakra-ui/react'
import { FaArrowAltCircleRight } from "react-icons/fa";

const mqtt = () => {
  return (
    <div className='h-screen overflow-hidden bg-slate-900 flex flex-col justify-center items-center align-center text-white'>
        <div className='h-[250px] bg-slate-100 w-[300px] rounded-md text-black flex flex-col shadow-xl items-center'>
            <p className='text-2xl font-bold py-6'>Enter PIN</p>
            <div className='flex flex-row space-x-2'>
                <Input border={"solid"} borderColor={"purple"} maxW={"200px"} id='pinInput' type='password' placeholder='PIN' className='shadow-xl bg-slate-200 p-2 rounded-md border border-slate-400 mb-4'/>
                <IconButton colorScheme='purple' size="md" label='Go' icon={<FaArrowAltCircleRight/>}/>
            </div>
            <p className='my-4 italic'>Not sure how you got here?</p>
            <a href='/'>
                <Button colorScheme='purple'>Go Back</Button>
            </a>  
        </div>
    </div>
  )
}

export default mqtt