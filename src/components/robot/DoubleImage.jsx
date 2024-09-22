import React from 'react'

function ImageCard({ bgImage, title, subtitle, description }) {
  return (
    <div className={`${bgImage} h-[400px] sm:h-[500px] md:h-[640px] w-full bg-cover bg-center`}>
      <div className='flex flex-col items-center justify-center h-full p-4 text-center'>
        <div className='text-[10px] sm:text-[12px] font-light font-almirego text-[#BE4E04] mb-2 sm:mb-4'>
          {title}
        </div>
        <div className='text-2xl sm:text-3xl md:text-4xl font-light font-almirego text-black mb-2'>
          {subtitle}
        </div>
        <div className='font-light font-almirego text-black mb-4 sm:mb-6'>
          {description}
        </div>
        <div className='flex gap-4 sm:gap-6'>
          <a href="#learn-more" className='font-light font-almirego text-[#1890FF] hover:underline'>Learn More &gt;</a>
          <a href="#buy-now" className='font-light font-almirego text-[#1890FF] hover:underline'>Buy Now &gt;</a>
        </div>
      </div>
    </div>
  )
}

function DoubleImage() {
  return (
    <div className='flex flex-col md:flex-row py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full gap-4 sm:gap-6 md:gap-8'>
      <ImageCard 
        bgImage="bg-[url('/robot/1.jpg')]"
        title="Multiple Focal Length Triple-Lens Flagship Camera Drone"
        subtitle="DJI MAVIC 3 PRO"
        description="Inspiration In Focus"
      />
      <ImageCard 
        bgImage="bg-[url('/robot/2.png')]"
        title="Multiple Focal Length Triple-Lens Flagship Camera Drone"
        subtitle="DJI MAVIC 3 PRO"
        description="Inspiration In Focus"
      />
    </div>
  )
}

export default DoubleImage