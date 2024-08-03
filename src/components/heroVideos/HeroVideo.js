import React from 'react'

function HeroVideo() {
  return (
    <div>
      <div className="absolute inset-0 overflow-hidden -z-10">
            <video
                autoPlay
                loop
                muted
                className="min-w-full min-h-full object-cover"
            >
                <source src="videos/robotVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
  )
}

export default HeroVideo
