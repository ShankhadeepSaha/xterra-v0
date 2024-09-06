import React from 'react';
import withFadeInAnimation from './animations/WithFadeInAnimation';

function SectionText() {
  return (
    <div className="container mx-auto p-4 font-almirego">
      {/* Text Section */}
      <div className='flex flex-col lg:flex-row mb-16 sm:mb-24 lg:mb-32'>
        <div className='w-full lg:w-2/3 mb-8 lg:mb-0'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>
            About xTerra
          </h1>
        </div>
      </div>
    </div>
  )
}

export default withFadeInAnimation(SectionText);