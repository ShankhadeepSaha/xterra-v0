import React from 'react'

function Header() {
  return (
    <div className="font-almirego">
      <div className='container mx-auto px-4 flex flex-col items-center mb-16 sm:mb-24 lg:mb-32'>
        <div className='w-full text-center mb-8'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>
            Our Robots 
          </h1>
        </div>
        <div className='w-full max-w-3xl'>
          <p className='text-l sm:text-xl md:text-2xl lg:text-3xl font-poppins font-light leading-tight text-center'>
            State-of-the-art, four-legged robotic system, meticulously engineered for exceptional mobility and agility, offering unparalleled terrain navigation capabilities in diverse environments.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header