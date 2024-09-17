import React from 'react'
import withFadeInAnimation from './animations/WithFadeInAnimation'
import WordReveal from './animations/WordReveal'

function HomeTextCombo({ heading, text, cta}) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-almirego">
      <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
        <WordReveal text={heading} className='text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-light text-[#050307] leading-tight' />
      </div>
      <div className='flex flex-col lg:flex-row mb-8 sm:mb-12 lg:mb-16'>
        <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
          {/* This div is intentionally left empty as per the original component */}
        </div>
        <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed'>
          {text}
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
          {/* This div is intentionally left empty as per the original component */}
        </div>
        <div className='w-full lg:w-1/2'>
          <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-300 hover:bg-[#333]">
            {cta}
          </button>
        </div>
      </div>
    </div>
  )
}

export default withFadeInAnimation(HomeTextCombo)