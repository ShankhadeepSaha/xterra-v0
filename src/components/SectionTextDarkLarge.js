import React from 'react'
import withFadeInAnimation from './animations/WithFadeInAnimation'

function SectionTextDarkLarge() {
  return (
    <div className='py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
      <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[88px] leading-tight sm:leading-tight md:leading-[130%] font-light font-almirego text-[#f6edde]'>
        Our robots offer unmatched mobility across diverse terrains, built for resilience and seamless integration into existing systems. Our legged robots outperform traditional wheeled solutions, delivering superior agility for challenging tasks.
      </div>
    </div>
  )
}

export default withFadeInAnimation(SectionTextDarkLarge)