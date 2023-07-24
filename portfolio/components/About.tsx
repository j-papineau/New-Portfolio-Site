import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex relative flex-col text-center md:text-left h-screen text-slate-200 md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[10px] text-slate-200 text-2xl'>About</h3>
    </div>
  )
}

export default About