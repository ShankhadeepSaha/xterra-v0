import React from 'react'

function HeroImage() {
  return (
    <div className='px-8'>
        <div className="bg-[url('../../public/robot/heroImage.jfif')] h-[640px] w-full bg-cover bg-center">
            <div className='flex flex-col items-center'>
                <div className='pt-10 text-[12px] font-light font-almirego text-white opacity-[0.45]'>
                    FPV Drone
                </div>
                <div className='text-4xl font-light font-almirego text-white'>
                    DJI AVATA 2
                </div>
                <div className='font-light font-almirego text-white'>
                    All Thrills, No Frills
                </div>
                <div className='flex pt-6 gap-6'>
                    <div className='font-light font-almirego text-white'>Learn More {">"}</div>
                    <div className='font-light font-almirego text-white'>Buy Now {">"}</div>
                </div>
            </div>        
        </div>
    </div>
  )
}

export default HeroImage