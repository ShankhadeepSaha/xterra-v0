import React from 'react'
import Image from 'next/image'

function CultivateSection() {
  return (
    <div className="container mx-auto p-4 font-poppins">
      {/* Text Section */}
      <div className='flex flex-col lg:flex-row mb-16 sm:mb-24 lg:mb-32'>
        <div className='w-full lg:w-2/3 mb-8 lg:mb-0'>
          <h1 className='text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            Build the future
          </h1>
        </div>
        <div className='w-full lg:w-1/3 flex items-end'>
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight'>
            We believe in challenging perspectives.
          </p>
        </div>
      </div>
      
      {/* Single Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
        <Image 
          src="/images/team/teammain.jpeg" 
          alt="Team Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default CultivateSection