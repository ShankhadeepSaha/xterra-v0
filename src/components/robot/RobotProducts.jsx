import React from 'react'
import Image from 'next/image'

function ImageHero() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] overflow-hidden">
      <Image 
        src="/robot/robotbanner.png"
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        priority
      />
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
  buyStyle = {},
  showLearnMore = true
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
        <div className={`text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8 backdrop-blur-sm`} style={descriptionStyle}>
          {description}
        </div>
        {(showLearnMore || buyLink) && (
          <div className='flex gap-4 mt-auto mb-8'>
            {showLearnMore && (
              <a href={learnMoreLink} className='px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors' style={learnMoreStyle}>
                Learn more
              </a>
            )}
            {/* {buyLink && (
              <a href={buyLink} className='px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors' style={buyStyle}>
                Buy
              </a>
            )} */}
          </div>
        )}
      </div>
    </div>
  )
}

function RobotProducts() {
  return (
    <div className='flex flex-col w-full'>
      <div className="sm:px-4">
        <ImageHero />
      </div>
      <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 sm:px-3 md:px-4 w-full'>
        <ImageCard 
          bgImage="bg-[url('/robot/m1.png')]"
          title="SVAN M1"
          subtitle="SERIES 1"
          description="Our first prototype quadruped robot"
          learnMoreLink="/svan-m1"
          buyLink="/buy-svan-m1"
          titleStyle={{ color: 'white' }}
          subtitleStyle={{ color: 'white' }}
          descriptionStyle={{ color: 'white' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
        <ImageCard 
          bgImage="bg-[url('/robot/m2.png')]"
          title="SVAN M2"
          subtitle="SERIES 2"
          description="India's first commercial quadruped robot"
          learnMoreLink="/svan-m2"
          buyLink="/buy-svan-m2"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black' }}
          descriptionStyle={{ color: 'black' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
        <ImageCard 
          bgImage="bg-[url('/robot/s1.png')]"
          title="SVAN S1"
          subtitle="COMING SOON"
          description="Next generation industrial robot"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black'}}
          descriptionStyle={{ color: 'black' }}
          showLearnMore={false}
        />
      </div>
    </div>
  )
}

export default RobotProducts