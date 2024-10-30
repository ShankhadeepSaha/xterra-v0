"use client";
import React from 'react';

const FutureOrganizations = () => {
  const scrollToSection = () => {
    const targetSection = document.getElementById('expertise-section');
    targetSection?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="w-screen min-h-screen relative flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-white-200 bg-opacity-50" />
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-128 font-almirego mb-6 sm:mb-8 leading-none text-black">
          Leading the Future<br />of Robotics
        </h1>
        <p className="font-light text-l sm:text-xl md:text-2xl mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed text-black-200">
          Revolutionizing Robotics: India's Premier Deep-Tech Startup Solving Locomotion Challenges with World-Class Engineering
        </p>
        <button 
          onClick={scrollToSection}
          className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium transition-colors duration-300 hover:bg-grey"
        >
          Learn more about our expertise
        </button>
      </div>
    </div>
  );
};

export default FutureOrganizations;