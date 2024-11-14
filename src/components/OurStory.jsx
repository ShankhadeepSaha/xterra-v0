'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";

function OurStory() {
  // Updated logos array with custom dimensions for each logo
  const logos = [
    { 
      src: "/images/companylogo/ca.png", 
      alt: "Ansys logo",
      width: 120,
      height: 120
    },
    { 
      src: "/images/companylogo/google.svg", 
      alt: "Google logo",
      width: 200,
      height: 140
    },
    { 
      src: "/images/companylogo/iitk copy.png", 
      alt: "IITK logo",
      width: 120,
      height: 100
    },
    { 
      src: "/images/companylogo/NVIDIA.png", 
      alt: "Nvidia logo",
      width: 220,
      height: 140
    },
    { 
      src: "/images/companylogo/MRL_LOGO.png", 
      alt: "MRL logo",
      width: 150,
      height: 120
    },
    { 
      src: "/images/companylogo/GATES.png", 
      alt: "GATES APAC logo",
      width: 160,
      height: 100
    },
    { 
      src: "/images/companylogo/IHFC IITD.png", 
      alt: "IHFC IITD logo",
      width: 140,
      height: 120
    },
    { 
      src: "/images/companylogo/START IN UP.png", 
      alt: "StartInUP logo",
      width: 170,
      height: 120
    },
    { 
      src: "/images/companylogo/Meity_Startup_Hub.png", 
      alt: "Meity Startup Hub logo",
      width: 190,
      height: 95
    },
    { 
      src: "/images/companylogo/SIIC_Logo.png", 
      alt: "SIIC logo",
      width: 280,
      height: 140
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 50;
      scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`);
      scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  return (
    <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
      <div className="w-full max-w-6xl text-center px-4">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight font-poppins text-[#050307] mb-8">
          Collaborations and Industry Support
        </h2>
        <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex animate-scroll"
            style={{
              width: 'calc(250px * 20)', // Adjusted for 10 logos × 2
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[250px] px-4 flex items-center justify-center"
              >
                <div 
                  className="relative"
                  style={{
                    width: `${logo.width}px`,
                    height: `${logo.height}px`
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes={`${Math.max(logo.width, logo.height)}px`}
                    className="object-contain"
                    style={{ maxWidth: '100%', height: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;