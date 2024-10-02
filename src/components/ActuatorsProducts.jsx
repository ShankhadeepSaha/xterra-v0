import React from 'react'

function VideoHero() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] overflow-hidden">
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
    </div>
  )
}

function ImageCard({ bgImage, title, subtitle, description, learnMoreLink, buyLink }) {
  return (
    <div className={`${bgImage} h-[400px] sm:h-[500px] md:h-[680px] w-full bg-cover bg-center`}>
      <div className='flex flex-col items-center h-full p-4 pt-16 sm:pt-24 md:pt-32 text-center'>
        <div className='text-3xl sm:text-4xl md:text-5xl font-semibold font-sans text-black mb-2'>
          {title}
        </div>
        <div className='text-sm sm:text-base md:text-lg font-light text-black mb-1'>
          {subtitle}
        </div>
        <div className='text-2xl sm:text-3xl md:text-4xl font-light text-black mb-6 sm:mb-8'>
          {description}
        </div>
        <div className='flex gap-4 mt-auto mb-8'>
          <a href={learnMoreLink} className='px-5 py-2 bg-[#4E148C] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-gray-700 transition-colors'>
            Learn more
          </a>
          <a href={buyLink} className='px-5 py-2 bg-white text-[#4E148C] rounded-full text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors'>
            Buy
          </a>
        </div>
      </div>
    </div>
  )
}

function ActuatorsProducts() {
  return (
    <div className='flex flex-col w-full'>
      <div className="sm:px-4">
        <VideoHero />
      </div>
      <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 sm:px-3 md:px-4 w-full'>
        <ImageCard 
          bgImage="bg-[url('/actuator/a.png')]"
          title="SVAN M1"
          subtitle="SERIES 1"
          description="Our first prototype quadruped robot."
          learnMoreLink="/svan-m1"
          buyLink="/buy-svan-m1"
        />
        <ImageCard 
          bgImage="bg-[url('/actuator/a.png')]"
          title="SVAN M2"
          subtitle="SERIES 2"
          description="India's first industrial quadruped robot."
          learnMoreLink="/svan-m2"
          buyLink="/buy-svan-m2"
        />
        <ImageCard 
          bgImage="bg-[url('/actuator/a.png')]"
          title="SVAN M3"
          subtitle="COMING SOON"
          description="Next generation quadruped robot."
          learnMoreLink="/svan-m3"
          buyLink="/pre-order-svan-m3"
        />
      </div>
    </div>
  )
}

export default ActuatorsProducts