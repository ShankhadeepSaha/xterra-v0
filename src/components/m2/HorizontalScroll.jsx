"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import industrialInspection from "../../../public/robot/m2.1.png";
import versatileLogistics from "../../../public/robot/m2.2.png";
import preciseManipulation from "../../../public/robot/m2.3.png";

const images = [
  {
    url: industrialInspection,
    alt: 'xTerra Quadruped Robot',
    heading: 'INDUSTRIAL INSPECTION',
    description: 'Our robots efficiently handle inspections in hazardous areas, ensuring predictive maintenance and enhancing security across industrial and urban environments.'
  },
  {
    url: versatileLogistics,
    alt: 'xTerra Robot with Payload',
    heading: 'VERSATILE LOGISTICS',
    description: 'Svan can move items effortlessly, even on slopes and stairs. They boost efficiency in logistics, handling tasks like warehouse operations, last-mile delivery, and military logistics in challenging terrains'
  },
  {
    url: preciseManipulation,
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

  // Remove the preloadImages effect since Next.js Image handles this automatically

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
      className="relative w-full h-screen overflow-hidden bg-white font-poppins"
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
          <div className="container mx-auto h-full px-4">
            <div className="flex flex-col md:flex-row h-full">
              {/* Text Content */}
              <div className="w-full md:w-1/2 md:pr-8 z-10 
                  flex flex-col justify-center
                  pt-20 pb-8 md:py-0 order-1 md:order-1">
                <h2 className="font-poppins font-semibold 
                    text-3xl p-4 sm:text-4xl md:text-5xl 
                    tracking-wider text-primary mb-8
                    text-center md:text-left
                    leading-tight">
                  {image.heading}
                </h2>
                <p className="font-poppins text-lg sm:text-xl md:text-2xl 
                    text-primary-foreground bg-primary bg-opacity-80 
                    p-4 rounded-lg backdrop-blur-md
                    text-center md:text-left
                    leading-relaxed">
                  {image.description}
                </p>
              </div>
              
              {/* Image Container */}
              <div className="w-full md:w-1/2 relative 
                  h-[50vh] md:h-full 
                  order-2 md:order-1">
                <div className="absolute inset-0 flex items-center justify-center md:justify-end">
                  <div className="relative w-[90%] h-[90%]">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      quality={100}
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
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

      {/* Navigation Buttons */}
      <Button
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 z-20 font-poppins"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
        variant="ghost"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      <Button
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 z-20 font-poppins"
        onClick={goToNextSlide}
        aria-label="Next slide"
        variant="ghost"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </Button>

      <Button
        className="absolute top-2 md:top-4 right-2 md:right-4 z-20 font-poppins"
        onClick={togglePlayPause}
        aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
        variant="ghost"
      >
        {isPlaying ? <Pause className="h-5 w-5 md:h-6 md:w-6" /> : <Play className="h-5 w-5 md:h-6 md:w-6" />}
      </Button>
    </div>
  );
}