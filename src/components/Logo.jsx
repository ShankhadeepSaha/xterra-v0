import React from 'react'

// Define the Logo component
const Logo = ({ src, alt }) => (
  <div className="w-[150px] h-[100px] flex items-center justify-center mx-4">
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
  </div>
)

export default function InfiniteLogoCarousel() {
  // Array of 12 logo objects
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
    { src: "/images/companylogo/SIIC_Logo.png", alt: "SIIC logo" },
  ]

  return (
    <div className="w-full overflow-hidden bg-gray-100 py-12">
      <div className="relative">
        <div className="flex animate-scroll">
          {logos.concat(logos).map((logo, index) => (
            <Logo key={index} src={logo.src} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  )
}