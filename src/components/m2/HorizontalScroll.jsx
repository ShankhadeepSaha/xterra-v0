'use client'

import { useState, useEffect } from 'react'

const images = [
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201%20(3)-k3rSu9xLR8BrwSvnAevOUxgyF6NpzJ.png',
    alt: 'xTerra Quadruped Robot',
    heading: 'INDUSTRIAL INSPECTION',
    description: 'Our robots efficiently handle inspections in hazardous areas, ensuring predictive maintenance and enhancing security across industrial and urban environments.'
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201%20(1)-36mkS5Im1CoxTw8WGaJpDCcGiNboAb.png',
    alt: 'xTerra Robot with Payload',
    heading: 'VERSATILE LOGISTICS',
    description: 'Svan can move items effortlessly, even on slopes and stairs. They boost efficiency in logistics, handling tasks like warehouse operations, last-mile delivery, and military logistics in challenging terrains'
  },
  {
    url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%201%20(2)-BoweMjRPnJP5oqjUn09wM6jmYxqTuH.png',
    alt: 'xTerra Robot with Robotic Arm',
    heading: 'PRECISE MANIPULATION',
    description: 'Our robots with manipulators excel in tasks requiring precision, such as factory maintenance, precision farming, and sample collection for research, combining advanced mobility with dexterous control'
  },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={image.url}
              alt={image.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div className="relative z-10 p-8 md:p-20 text-black w-full h-full flex flex-col justify-between">
            <p className="w-full md:w-2/3 lg:w-1/2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl self-end text-right uppercase mb-8 sm:mb-0 p-4 rounded-lg  mt-8 mr-8">
              {image.description}
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase mt-auto p-4 rounded-lg inline-block mb-8 ml-8">
              {image.heading}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}