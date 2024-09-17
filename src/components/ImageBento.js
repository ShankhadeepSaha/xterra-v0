import React from 'react';

const ImageBento = () => {
  const images = [
    { src: "images/placeholder/img4.png", alt: "Person working on laptop on grass", className: "col-span-2 row-span-2" },
    { src: "images/placeholder/img2.png", alt: "City view through window", className: "col-span-1 row-span-2" },
    { src: "images/placeholder/img3.jfif", alt: "Person with headphones working on laptop", className: "col-span-1 row-span-1" },
    { src: "images/placeholder/img5.png", alt: "Desk with coffee maker and decorations", className: "col-span-2 row-span-2" },
    { src: "images/placeholder/img1.png", alt: "Yellow door with decorations", className: "col-span-1 row-span-2" },
    { src: "images/placeholder/img6.jfif", alt: "Hands drawing on paper with smartphone", className: "col-span-1 row-span-2" },
    { src: "images/placeholder/img7.png", alt: "People playing Jenga", className: "col-span-1 row-span-1" },
    { src: "images/placeholder/img8.png", alt: "Modern office space", className: "col-span-1 row-span-1" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`${image.className} overflow-hidden rounded-lg`}>
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
};

export default ImageBento;