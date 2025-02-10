import React from "react";

const images = [
  "/robot/1.webp",
  "/robot/2.jpeg",
  "/robot/3.webp"
];

export default function ImageGrid() {
  return (
    <div className="bg-white px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-48 object-cover rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}