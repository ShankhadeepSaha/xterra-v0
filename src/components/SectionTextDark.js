import React from 'react';
import withFadeInAnimation from './animations/WithFadeInAnimation';

function SectionTextDark() {
  return (
    <div className='flex flex-col md:flex-row py-8 sm:py-12 md:py-16 lg:py-[64px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36'>
      <div className='w-full md:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] font-almirego text-[#F7EDDE] mb-8 md:mb-0'>
        Our vision is to advance humanity by creating robots that seamlessly integrate into our world, enhancing our ability to interact with and navigate our environment. We aim to design robots that go beyond conventional limitations, offering robust, dynamic, and adaptable solutions for a variety of applications.
      </div>
      <div className='w-full md:w-1/2'></div>
    </div>
  );
}

export default withFadeInAnimation(SectionTextDark);