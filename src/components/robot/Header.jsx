import React from 'react'

function Header() {
  return (
    <div className='flex flex-col items-center pt-16 pb-8'>
        <div className='font-almirego font-bold text-5xl'>Camera Drones</div>
        <div className='text-center font-almirego font-light pt-6'>
            Capture your moments from above with<br/>
            a mini drone, FPV, or professional aerial camera.
        </div>
    </div>
  )
}

export default Header