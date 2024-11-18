"use client";

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

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
    <div className="w-full h-screen relative flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <img
        src="/images/outog.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

      {/* Top section with heading and paragraph */}
      <div className="relative z-10 w-full pt-[15vh] sm:pt-[17vh] md:pt-[18vh]">
        <div className="w-[90vw] md:w-[85vw] mx-auto flex flex-col items-center">
          <h1 className="text-[clamp(24px,5vw,80px)] font-poppins font-medium tracking-[-0.02em] leading-[1.1] text-white text-center whitespace-nowrap">
            Leading the Future of Robotics
          </h1>
          <p className="font-poppins text-base sm:text-lg md:text-lg lg:text-2xl 2xl:text-3xl text-white leading-relaxed tracking-[-0.01em] font-light max-w-3xl 2xl:max-w-4xl mt-2 sm:mt-4 text-center">
            Revolutionizing Robotics: India's Premier Deep-Tech Startup Solving{' '}
            <br className="hidden sm:inline" /> 
            Locomotion Challenges with World-Class Engineering
          </p>
        </div>
      </div>

      {/* Bottom section with button */}
      <div className="relative z-10 w-full flex flex-col items-center justify-end pb-16 sm:pb-20">
        <button
          onClick={scrollToSection}
          className="bg-gray-50 text-black p-3 sm:p-4 md:p-5 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-110 shadow-lg hover:shadow-xl"
          aria-label="Scroll to expertise section"
        >
          <ArrowDown
            size={isMobile ? 20 : 24}
            strokeWidth={2}
            className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
          />
        </button>
      </div>
    </div>
  );
}