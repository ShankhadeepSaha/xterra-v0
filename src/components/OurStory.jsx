'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";

function OurStory() {
  const logos = [
    { src: "/images/companylogo/Ansys.svg", alt: "Ansys logo" },
    { src: "/images/companylogo/cadfem.svg", alt: "CADFEM logo" },
    { src: "/images/companylogo/eta.png", alt: "ETA logo" },
    { src: "/images/companylogo/google.png", alt: "Google logo" },
    { src: "/images/companylogo/iitk.png", alt: "IITK logo" },
    { src: "/images/companylogo/nvidia.png", alt: "Nvidia logo" },
    { src: "/images/companylogo/mrl.png", alt: "MRL logo" },
    { src: "/images/companylogo/GATES_APAC_Logo.jpeg", alt: "GATES APAC logo" },
    { src: "/images/companylogo/IHFC_IITD.jpg", alt: "IHFC IITD logo" },
    { src: "/images/companylogo/StartInUP.jpeg", alt: "StartInUP logo" },
    { src: "/images/companylogo/Meity_Startup_Hub.png", alt: "Meity Startup Hub logo" },
    { src: "/images/companylogo/SIIC_Logo.png", alt: "SIIC logo"},
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
              width: 'calc(250px * 24)',
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[250px] px-4 flex items-center justify-center h-[100px]"
              >
                <div className="relative w-[120px] h-[120px]">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="120px"
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