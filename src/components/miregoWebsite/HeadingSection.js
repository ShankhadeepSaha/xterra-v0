import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import WordReveal from '../animations/WordReveal';

function HeadingSection() {

  return (
    <div className='mt-80 px-24'>
        <WordReveal text='✦ We build the future.' className='text-[5.5rem] font-light font-almirego text-[#050307]' />
    </div>
  )
}

export default HeadingSection