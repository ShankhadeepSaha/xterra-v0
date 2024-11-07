"use client";

import React, { useState, useEffect } from 'react';
import { ArrowDownRight } from 'lucide-react';

export default function Component() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = () => {
    const targetSection = document.getElementById('expertise-section');
    targetSection?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video> */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-poppins font-bold mb-8 sm:mb-10 md:mb-12 leading-tight sm:leading-none text-black tracking-tight">
          Leading the Future<br className="hidden sm:inline" /> of Robotics
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-6 max-w-4xl mx-auto">
          <p className="font-light font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-6 sm:mb-0 sm:flex-1">
            Revolutionizing Robotics: India's Premier Deep-Tech Startup Solving Locomotion Challenges with World-Class Engineering
          </p>

          <button
            onClick={scrollToSection}
            className="bg-black text-white p-3 sm:p-4 md:p-5 rounded-full transition-all duration-300 hover:bg-gray-800 hover:scale-110 flex-shrink-0 shadow-lg hover:shadow-xl"
            aria-label="Scroll to expertise section"
          >
            <ArrowDownRight
              size={isMobile ? 20 : 24}
              strokeWidth={2}
              className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}