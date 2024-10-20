import React from 'react'
import Image from 'next/image'

function CultivateSection() {
  const images = [
    { src: "/images/img/dog1.jpg", alt: "Image 1", className: "col-span-2 row-span-1 hidden sm:block" },
    { src: "/images/img/svanM2_Lko_1.jpg", alt: "Image 2", className: "col-span-2 sm:col-span-1 row-span-2 hidden sm:block" },
    { src: "/images/img/dog.jpg", alt: "Image 3", className: "col-span-2 sm:col-span-1 row-span-1 hidden sm:block" },
    { src: "/images/team/team.png", alt: "Image 4", className: "col-span-2 row-span-2" },
    { src: "/images/img/Dhaya_Lab.jpg", alt: "Image 5", className: "col-span-2 sm:col-span-1 row-span-1 hidden sm:block" },
    { src: "/images/img/avinash_lab.jpg", alt: "Image 6", className: "col-span-2 sm:col-span-1 row-span-1 hidden sm:block" },
    { src: "/images/img/teamPhoto2.jpg", alt: "Image 7", className: "col-span-2 sm:col-span-1 row-span-1 hidden sm:block" },
  ];

  return (
    <div className="container mx-auto p-4 font-almirego">
      {/* Text Section */}
      <div className='flex flex-col lg:flex-row mb-16 sm:mb-24 lg:mb-32'>
        <div className='w-full lg:w-2/3 mb-8 lg:mb-0'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            Build the future
          </h1>
        </div>
        <div className='w-full lg:w-1/3 flex items-end'>
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight'>
            We believe in challenging perspectives.
          </p>
        </div>
      </div>
      
      {/* Complex Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[150px] sm:auto-rows-[200px]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg ${image.className}`}
          >
            <Image 
              src={image.src} 
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CultivateSection