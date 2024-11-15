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
        src="/images/out.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />

      <div className="relative z-10 container flex flex-col items-center justify-center text-center pt-36 sm:pt-28 md:pt-30">
        <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] font-poppins font-medium tracking-[-0.02em] leading-[1.1] text-white bg-black/5 rounded-xl max-w-[90%] 2xl:max-w-[80%] mx-auto">
          Leading the Future{' '}
          <br className="hidden sm:inline" /> 
          of Robotics
        </h1>
        <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-white leading-relaxed tracking-[-0.01em] font-light max-w-3xl 2xl:max-w-4xl lg:mb-20 px-6 py-4">
          Revolutionizing Robotics: India's Premier Deep-Tech Startup Solving Locomotion Challenges with World-Class Engineering
        </p>
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

      {/* <div className="relative z-10 container flex flex-col items-center justify-center text-center pb-24">
        <p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-gray-100 leading-relaxed tracking-[-0.01em] font-light max-w-3xl 2xl:max-w-4xl bg-black/5 rounded-xl mb-12 px-6 py-4">
          Revolutionizing Robotics: India's Premier Deep-Tech Startup Solving Locomotion Challenges with World-Class Engineering
        </p>

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
      </div> */}
    </div>
  );
}