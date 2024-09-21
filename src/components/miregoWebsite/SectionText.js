import React, { useEffect, useRef } from 'react'

function SectionText() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    let isPlaying = false;

    const handleScroll = () => {
      if (!isPlaying && window.scrollY > 0) {
        videoElement.play();
        isPlaying = true;
      } else if (isPlaying && window.scrollY === 0) {
        videoElement.pause();
        isPlaying = false;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="font-almirego">
      {/* Text Section */}
      <div className='container mx-auto px-4 flex flex-col lg:flex-row mb-16 sm:mb-24 lg:mb-32'>
        <div className='w-full lg:w-2/3 mb-8 lg:mb-0'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>
          Redefining Robotics
          </h1>
        </div>
        <div className='w-full lg:w-1/3 flex items-end'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight'>
          Pushing Boundaries to Unlock New Possibilities.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-screen overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover"
          loop 
          muted 
          playsInline
        >
          <source src="/videos/m2RobotVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default SectionText