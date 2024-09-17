import React from 'react'

function BlandBrands() {
  return (
    <div className='container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32 font-almirego'>
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between'>
        <div className='text-3xl sm:text-4xl md:text-5xl mb-6 lg:mb-0 lg:w-1/3'>
          Where Bland Brands Go Bold
        </div>
        <div className='font-light text-xl sm:text-2xl md:text-3xl lg:w-1/2'>
          At Integra Magna, we skip the monochrome.
          We're the renegades, the rule-breakers, the
          creative alchemists who turn marketing snooze-
          fests into brand masterpieces. So, are you ready
          to move beyond monochrome and embrace the
          bold?
          <p className='mt-4'>P.S. We also have excellent taste in coffee. Just
          sayin.</p>
        </div>
      </div>
    </div>
  )
}

export default BlandBrands