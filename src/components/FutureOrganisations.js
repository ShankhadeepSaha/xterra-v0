import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const FutureOrganizations = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const container = containerRef.current;
    const phrases = container.children;
    const totalHeight = container.offsetHeight;

    gsap.set(phrases, { y: (i) => 0 }); // Set initial positions

    const tl = gsap.timeline({ repeat: 0 });

    tl.to(phrases, {
      duration: 1,
      y: `-=${3*totalHeight + 18}`,
      ease: 'none',
    });

    return () => tl.kill(); // Cleanup
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20 text-center max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-almirego mb-4">
          Leading the Future
        </h1>
        <div className="flex justify-center">
          <div ref={containerRef} className="h-[60px] sm:h-[70px] md:h-[80px] overflow-hidden relative">
            {['of Innovation', 'of Technology', 'of Sustainability', 'of Robotics'].map((phrase, index) => (
              <div key={index} className="w-full">
                <div className="inline-block border-2 border-[#5524A3] rounded-full px-2 sm:px-3 md:px-4 py-1 h-[60px] sm:h-[70px] md:h-[80px] overflow-hidden">
                  <h2 className="font-almirego font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-2 text-[#5524A3] whitespace-nowrap">
                    {phrase}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="font-almirego text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4 sm:my-6 max-w-3xl mx-auto">
          Revolutionizing Robotics: India's Premier Deep-Tech Startup Solving Locomotion Challenges with World-Class Engineering
        </p>
        <button className="bg-black font-almirego text-white px-4 sm:px-5 md:px-6 py-2 my-2 sm:my-3 md:my-4 rounded-lg text-xs sm:text-sm md:text-base font-semibold transition-colors duration-300 hover:bg-[#5524A3]">
          Learn more about our expertise
        </button>
      </div>
    </div>
  );
};

export default FutureOrganizations;