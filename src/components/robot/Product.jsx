import React from 'react'

function Product() {
  return (
    <div className='flex flex-col items-center'>
      <div className='h-60 w-60 object-cover'>
        <img src="robot/drone1.png" alt="drone" />
      </div>
      <div>
        Flagship
      </div>
      <div>
        DJI Mavic 3 Pro
      </div>
      <div>
        USD $2199
      </div>
      <div>
        Buy Now
      </div>
      <div>
        Learn More {">"}
      </div>
      <div>
        ...
      </div>
    </div>
  )
}

export default Product