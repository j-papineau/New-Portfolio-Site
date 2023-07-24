import React from 'react'
import ReactCardFlip from 'react-card-flip'
import Image from 'next/image'

type Props = {}

const Cards = (props: Props) => {

    
  return (
    <div className='flex min-h-screen flex-col justify-center'>
        <div className='group h-96 w-96 [perspective:1000px]'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className="absolute inset-0">
                    <Image className="h-full w-full rouded-xl object-cover shadow-xl shadow-black/100 bg-black/100  " src="/images/fest.jpeg" alt="festival image"
                    height={1920}
                    width={1080}></Image>
                </div>
                <div className="absolute inset-0 h-full w-full ronded-xl bg-black/10 px-12 text-center text-slate-400 [backface-visibility:hidden]">
                    <h1 className='text-3xl font-bold'>I love music festivals!</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards