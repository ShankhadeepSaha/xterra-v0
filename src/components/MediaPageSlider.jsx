import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MediaPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Where To Watch 'John Wick: Chapter 4'",
      description: "The latest installment in the John Wick franchise, Chapter 4, is streaming release. However, given it's a Lionsgate film, where exactly can you watch it?",
    },
    {
      title: "The Batman: Now Streaming",
      description: "The latest dark knight adventure starring Robert Pattinson is now available to stream. Find out where you can watch this epic reimagining.",
    },
    {
      title: "Dune: Part Two",
      description: "Denis Villeneuve's epic sci-fi sequel continues the story of Paul Atreides. Here's everything you need to know about where to watch it.",
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="group bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl m-2">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src="/api/placeholder/800/400"
                    alt={slide.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {slide.title}
                  </CardTitle>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {slide.description}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <a href="#" className="text-red-600 hover:text-red-700 font-medium transition-colors duration-300">
                    Read more →
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === index ? 'bg-red-600' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaPageSlider;