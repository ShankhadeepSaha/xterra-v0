import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from 'next/link';


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
    {
      src: "/images/companylogo/Meity_Startup_Hub.png",
      alt: "Meity Startup Hub logo",
    },
    { src: "/images/companylogo/SIIC_Logo1.png", alt: "SIIC logo" },
  ];

  return (
    <>
      <div className="flex flex-col items-center pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-white">
        <div className="w-full max-w-6xl text-center px-4">
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-tight font-almirego text-[#050307] mb-8">
            Collaborations and Industry Support
          </div>
          <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-12">
                {logos.map((logo, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={60}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
