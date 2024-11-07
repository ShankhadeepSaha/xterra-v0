import React from 'react'
import withFadeInAnimation from './animations/WithFadeInAnimation'

function HeadingSectionDark() {
  return (
    <div className='pt-16 sm:pt-20 md:pt-24 lg:pt-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
      <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5.5rem] font-light font-poppins text-[#F7EDDE]'>
        ✲ Our Vision
      </div>
    </div>
  )
}

export default withFadeInAnimation(HeadingSectionDark)