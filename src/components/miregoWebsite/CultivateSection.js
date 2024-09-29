import React from 'react'
import Image from 'next/image'

function CultivateSection() {
  const images = [
    { src: "/images/team/OutInWild_xTerra.webp", alt: "Image 1", className: "col-span-2 row-span-1" },
    { src: "/images/team/svanM2_Lko_1.webp", alt: "Image 2", className: "col-span-1 row-span-2" },
    { src: "/images/team/dog_M2_2.webp", alt: "Image 3", className: "col-span-1 row-span-1" },
    { src: "/images/team/team.webp", alt: "Image 4", className: "col-span-2 row-span-2" },
    { src: "/images/team/Dhaya_Lab.webp", alt: "Image 5", className: "col-span-1 row-span-1" },
    { src: "/images/team/avinash_lab.webp", alt: "Image 6", className: "col-span-1 row-span-1" },
    { src: "/images/team/teamPhoto2.webp", alt: "Image 7", className: "col-span-1 row-span-1" },
  ];

  return (
    <div className="container mx-auto p-4 font-almirego">
      {/* Text Section */}
      <div className='flex flex-col lg:flex-row mb-16 sm:mb-24 lg:mb-32'>
        <div className='w-full lg:w-2/3 mb-8 lg:mb-0'>
          <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>
            Cultivate
          </h1>
        </div>
        <div className='w-full lg:w-1/3 flex items-end'>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight'>
            We believe in challenging perspectives.
          </p>
        </div>
      </div>
      
      {/* Complex Image Grid */}
      <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
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