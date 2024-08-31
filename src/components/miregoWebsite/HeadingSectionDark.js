import React, { useRef } from 'react'
import withFadeInAnimation from '../animations/WithFadeInAnimation'

function HeadingSectionDark() {
  return (
    <div className='pt-32 px-24'>
        <div className='text-[5.5rem] font-light font-almirego text-[#F7EDDE]'>
          ✲ Our Vision
        </div>
    </div>
  )
}

export default withFadeInAnimation(HeadingSectionDark)