import React from 'react'

function VideoHero() {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[780px] overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/videos/m2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional: Add overlay text or buttons here */}
    </div>
  )
}

function ImageCard({ bgImage, title, subtitle, description }) {
  return (
    <div className={`${bgImage} h-[500px] sm:h-[600px] md:h-[780px] w-full bg-cover bg-center`}>
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
        </div>
      </div>
    </div>
  )
}

function HeroAndProducts() {
  return (
    <div className='flex flex-col w-full'>
      <div className="px-4 sm:px-8">
        <VideoHero />
      </div>
      <div className='flex flex-col gap-4 sm:gap-6 md:gap-8 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8 w-full'>
        <ImageCard 
          bgImage="bg-[url('/robot/1.jpg')]"
          title="SVAN M1 Series"
          subtitle="SVAN M1"
          description="Our first prototype quadruped robot"
        />
        <ImageCard 
          bgImage="bg-[url('/robot/1.jpg')]"
          title="SVAN M2 Series"
          subtitle="SVAN M2"
          description="India's first industrial quadruped robot"
        />
        <ImageCard 
          bgImage="bg-[url('/robot/1.jpg')]"
          title="Coming Soon"
          subtitle="SVAN M3"
          description="Next generation quadruped robot"
        />
      </div>
    </div>
  )
}

export default HeroAndProducts