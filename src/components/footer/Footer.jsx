import React from 'react'
import BlinkingText from '@/components/animations/BlinkingText';
import { GoArrowRight } from "react-icons/go";

export default function Footer() {
  return (
    <div className='w-full bg-white'>
      <Content />
    </div>
  )
}

function Content() {
  return (
    <div className='container mx-auto p-4 pb-8 sm:pb-12 md:pb-16 lg:pb-20 flex flex-col justify-between space-y-8 md:space-y-12'>
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-almirego font-light'>
      <BlinkingText text='info@xterrarobotics.com' className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-almirego font-light' />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='flex flex-col space-y-8 md:space-y-12 border-t pt-8 md:pt-12'>
      <div className='flex flex-col lg:flex-row lg:space-x-16'>
        <div className='flex flex-col space-y-2 md:space-y-4 w-full lg:w-1/2 mb-8 lg:mb-0'>
          {['Robots', 'Actuators', 'Solutions', 'About', 'Careers'].map((text, index) => (
            <BlinkingText key={index} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-almirego font-light' text={text} />
          ))}
        </div>
        <div className='flex flex-col space-y-6 w-full lg:w-1/2'>
          <div className='w-full mb-4'>
            <div className='text-lg sm:text-xl md:text-2xl font-almirego font-normal'>xTerra Robotics</div>
            <div className='text-base sm:text-lg md:text-xl font-almirego font-light mt-2'>G-508/11, Avas Vikas No. 1,</div>
            <div className='text-base sm:text-lg md:text-xl font-almirego font-light mt-2'>Kalyanpur, Kanpur-208017</div>
          </div>
          <div className='flex flex-wrap gap-4'>
            <BlinkingText className='text-base sm:text-lg md:text-xl font-almirego font-normal' text='Linkedin' icon={true} />
            <BlinkingText className='text-base sm:text-lg md:text-xl font-almirego font-normal' text='Instagram' icon={true} />
            <BlinkingText className='text-base sm:text-lg md:text-xl font-almirego font-normal' text='X' icon={true} />
            <BlinkingText className='text-base sm:text-lg md:text-xl font-almirego font-normal' text='Youtube' icon={true} />
          </div>
          <div className='flex flex-wrap gap-4 justify-between'>
            <div className='text-base sm:text-lg md:text-xl font-almirego font-normal'>© 2024 xTerra Robotics. All rights reserved.</div>
            {/* <div className='text-base sm:text-lg md:text-xl font-almirego font-normal'>
              <span className="mr-4">Terms</span>
              <span>Privacy</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

