import React from 'react'
import Product from './Product'

function Comparison() {
  return (
    <div>
      <div className='font-poppins text-center text-4xl'>
        Popular Drone<br/>
      </div>
      <div className='flex gap-4 py-4 justify-center'>
        <div className='font-poppins font-bold text-center pb-2 border-b-2 border-black'>
          Aerial Imaging
        </div>
        <div className='font-poppins text-center'>
          Immersive Flight
        </div>
      </div>
      <div className='flex gap-8 py-4 justify-center'>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Comparison