import React from 'react'
import withFadeInAnimation from './animations/WithFadeInAnimation'

function SectionTextSmall() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
          {/* This div is intentionally left empty as per the original component */}
        </div>
        <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] font-almirego text-[#050307]'>
          At xTerra, our mission is clear: to build advanced robotics solutions that empower people to perform tasks with unmatched safety, speed, and efficiency. We are dedicated to driving innovation in robotics, creating technology that not only enhances productivity but also transforms industries.
        </div>
      </div>
    </div>
  )
}

export default withFadeInAnimation(SectionTextSmall)