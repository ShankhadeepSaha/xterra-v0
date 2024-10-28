'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
  const [isPlaying, setIsPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef(null)

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  const goToPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [])

  const togglePlayPause = useCallback(() => {
    setIsPlaying((prev) => !prev)
  }, [])

  useEffect(() => {
    let timer
    if (isPlaying) {
      timer = setInterval(goToNextSlide, 5000)
    }
    return () => clearInterval(timer)
  }, [isPlaying, goToNextSlide])

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((image) => {
        const img = new Image()
        img.src = image.url
      })
    }
    preloadImages()
  }, [])

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      goToPreviousSlide()
    } else if (event.key === 'ArrowRight') {
      goToNextSlide()
    } else if (event.key === ' ') {
      togglePlayPause()
    }
  }, [goToPreviousSlide, goToNextSlide, togglePlayPause])

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      goToNextSlide()
    }
    if (touchStart - touchEnd < -50) {
      goToPreviousSlide()
    }
  }

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-screen overflow-hidden bg-white"
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={index !== currentIndex}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-contain"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="container mx-auto p-4 mt-12 sm:mt-16 md:mt-12 lg:mt-12 absolute inset-0 flex flex-col items-center justify-between">
            <h2 className="font-almirego font-semibold text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto tracking-wider text-primary backdrop-blur-lg">
              {image.heading}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-center max-w-5xl mx-auto text-primary-foreground bg-primary bg-opacity-80 p-4 rounded-lg backdrop-blur-md">
              {image.description}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <Button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full p-0 bg-primary bg-opacity-50 hover:bg-opacity-100 transition-all",
              index === currentIndex && "bg-opacity-100 scale-125"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
      <Button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
        variant="ghost"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
        onClick={goToNextSlide}
        aria-label="Next slide"
        variant="ghost"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
      <Button
        className="absolute top-4 right-4 z-20"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        variant="ghost"
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </Button>
    </div>
  )
}