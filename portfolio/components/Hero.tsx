import React from 'react'
import { Cursor, useTypewriter} from "react-simple-typewriter"
import { Typewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {

    // const [text, count] = useTypewriter({
    //     words: ["Myself", "The World", "Your Company"],
    //     delaySpeed:2000,
    //     loop:true
    // });

  return (
    <div>


        <h1>
            <p className='text-2xl font-serif'>I Code For:</p>
            <span style={{color: 'white', fontWeight: 'bold'}}>
                <Typewriter
                loop
                cursor
                cursorStyle="_"
                words={["Myself", "The World", "Your Company"]}
                />


            </span>
        </h1>
    

    </div>
  )
}

export default Hero