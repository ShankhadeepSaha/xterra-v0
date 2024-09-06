// SectionTextDark.js
import React from 'react';
import withFadeInAnimation from './animations/WithFadeInAnimation';

function SectionTextDark() {
  return (
    <div className='flex py-[64px] px-24'>
      <div className='w-1/2 text-[1.3rem] font-almirego text-[#F7EDDE]'>
        Our vision is to advance humanity by creating robots that seamlessly integrate into our world, enhancing our ability to interact with and navigate our environment. We aim to design robots that go beyond conventional limitations, offering robust, dynamic, and adaptable solutions for a variety of applications.
      </div>
      <div className='w-1/2'></div>
    </div>
  );
}

export default withFadeInAnimation(SectionTextDark);