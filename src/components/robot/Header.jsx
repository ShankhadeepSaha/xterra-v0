import React from 'react'

function Header() {
  return (
    <div className='flex flex-col items-center px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-16 pb-4 sm:pb-6 md:pb-8'>
      <h1 className='font-almirego text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center mb-4 sm:mb-6 md:mb-8'>
        Robots 
      </h1>
      <p className='text-center font-almirego font-light text-sm sm:text-base md:text-lg lg:text-xl mt-3 sm:mt-4 md:mt-6 max-w-md md:max-w-lg lg:max-w-xl'>
        State-of-the-art, four-legged robotic system, meticulously engineered for exceptional mobility and agility, offering unparalleled terrain navigation capabilities in diverse environments.
      </p>
    </div>
  )
}

export default Header