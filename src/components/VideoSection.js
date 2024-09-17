import React from 'react'

function VideoSection() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 lg:pt-20'>
      <div className='w-full h-64 sm:h-96 md:h-[600px] lg:h-[1203px] bg-gray-200 overflow-hidden shadow-lg rounded-lg'>
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={"videos/m2RobotVideo.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default VideoSection