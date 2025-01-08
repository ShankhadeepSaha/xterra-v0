import React from 'react';

const images = [
  {
    src: "/images/iitk.jpg", // Replace with your image path
    alt: "Cobot C1 Image 1",
    className: "col-span-2 row-span-2", // Large section
  },
  {
    src: "/images/iitk.jpg", // Replace with your image path
    alt: "Cobot C1 Image 2",
    className: "col-span-1 row-span-2", // Small section// Small section// Small section
  },
  {
    src: "/images/iitk.jpg", // Replace with your image path
    alt: "Cobot C1 Image 3",
    className: "col-span-1 row-span-1", // Small section
  },
  {
    src: "/images/iitk.jpg", // Replace with your image path
    alt: "Cobot C1 Image 4",
    className: "col-span-1 row-span-1", // Small section
  },
  {
    src: "/images/iitk.jpg", // Replace with your image path
    alt: "Cobot C1 Image 5",
    className: "col-span-1 row-span-1", // Small section
  },
];

export default function BentoBoxShowcase() {
  return (
    <div className="bg-white text-gray-800 p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}