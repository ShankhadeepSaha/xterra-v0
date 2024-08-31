import React from 'react'

function DoubleImage() {
  return (
    <div className='flex py-8 px-8 w-full gap-8'>
        <div className="bg-[url('../../public/robot/djMavic.jfif')] h-[640px] w-full bg-cover bg-center">
            <div className='flex flex-col items-center'>
                <div className='pt-10 text-[12px] font-light font-almirego text-[#BE4E04]'>
                    Multiple Focal Length Triple-Lens Flagship Camera Drone
                </div>
                <div className='text-4xl font-light font-almirego text-black'>
                    DJI MAVIC 3 PRO
                </div>
                <div className='font-light font-almirego text-black'>
                    Inspiration In Focus
                </div>
                <div className='flex pt-6 gap-6'>
                    <div className='font-light font-almirego text-[#1890FF]'>Learn More {">"}</div>
                    <div className='font-light font-almirego text-[#1890FF]'>Buy Now {">"}</div>
                </div>
            </div>        
        </div>
        <div className="bg-[url('../../public/robot/djMini.jfif')] h-[640px] w-full bg-cover bg-center">
        <div className='flex flex-col items-center'>
                <div className='pt-10 text-[12px] font-light font-almirego text-[#BE4E04]'>
                    Multiple Focal Length Triple-Lens Flagship Camera Drone
                </div>
                <div className='text-4xl font-light font-almirego text-black'>
                    DJI MAVIC 3 PRO
                </div>
                <div className='font-light font-almirego text-black'>
                    Inspiration In Focus
                </div>
                <div className='flex pt-6 gap-6'>
                    <div className='font-light font-almirego text-[#1890FF]'>Learn More {">"}</div>
                    <div className='font-light font-almirego text-[#1890FF]'>Buy Now {">"}</div>
                </div>
            </div>          
        </div>
    </div>
  )
}

export default DoubleImage