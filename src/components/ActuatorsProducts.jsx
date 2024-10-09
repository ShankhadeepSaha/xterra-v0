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

function ImageCard({ 
  bgImage, 
  title, 
  subtitle, 
  description, 
  learnMoreLink, 
  buyLink,
  titleStyle = {},
  subtitleStyle = {},
  descriptionStyle = {},
  learnMoreStyle = {},
  buyStyle = {}
}) {
  return (
    <div className={`${bgImage} h-[400px] sm:h-[500px] md:h-[680px] w-full bg-cover bg-center`}>
      <div className='flex flex-col items-center h-full p-4 pt-16 sm:pt-24 md:pt-32 text-center'>
        <div className={`text-3xl sm:text-4xl md:text-5xl font-semibold font-sans mb-2`} style={titleStyle}>
          {title}
        </div>
        <div className={`text-sm sm:text-base md:text-lg font-light mb-1`} style={subtitleStyle}>
          {subtitle}
        </div>
        <div className={`text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8`} style={descriptionStyle}>
          {description}
        </div>
        <div className='flex gap-4 mt-auto mb-8'>
          <a href={learnMoreLink} className='px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors' style={learnMoreStyle}>
            Learn more
          </a>
          {/* {buyLink && (
            <a href={buyLink} className='px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors' style={buyStyle}>
              Buy
            </a>
          )} */}
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
          bgImage="bg-[url('/actuator/a1.png')]"
          title="QDD A1"
          subtitle="SERIES 1"
          description="Our Quasi Direct Drive actuator."
          learnMoreLink="/svan-m1"
          buyLink="/buy-svan-m1"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black' }}
          descriptionStyle={{ color: 'black' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
        <ImageCard 
          bgImage="bg-[url('/actuator/a2.png')]"
          title="QDD A2"
          subtitle="SERIES 2"
          description="Our next-generation of QDD actuators."
          learnMoreLink="/svan-m2"
          buyLink="/buy-svan-m2"
          titleStyle={{ color: 'white' }}
          subtitleStyle={{ color: 'white' }}
          descriptionStyle={{ color: 'white' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
        <ImageCard 
          bgImage="bg-[url('/actuator/a3.png')]"
          title="QDD A3"
          subtitle="SERIES 3"
          description="Optimized for maximum torque."
          learnMoreLink="/svan-m3"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black' }}
          descriptionStyle={{ color: 'black' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
        />
      </div>
    </div>
  )
}

export default ActuatorsProducts