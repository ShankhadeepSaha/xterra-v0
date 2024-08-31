import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SwiperPhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Sample photo data - replace with your actual photo URLs
  const photos = [
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
  ];

  const radius = 200; // Radius of the orbit
  const centerX = 300; // Center X coordinate
  const centerY = 300; // Center Y coordinate

  return (
    <div className="w-full h-[600px] bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse" /> {/* Sun */}
      </div>
      {photos.map((photo, index) => {
        const angle = (index / photos.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        return (
          <motion.div
            key={index}
            className="absolute w-20 h-20 rounded-full overflow-hidden cursor-pointer"
            style={{ 
              left: `${x}px`, 
              top: `${y}px`,
            }}
            animate={{
              scale: activeIndex === index ? 1.2 : 1,
              zIndex: activeIndex === index ? 10 : 1,
            }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActiveIndex(index)}
          >
            <img 
              src={photo} 
              alt={`Planet ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h2 className="text-xl font-bold mb-2">Planet {activeIndex + 1}</h2>
        <p>Click on a planet to focus</p>
      </div>
    </div>
  );
};

export default SwiperPhotoGallery;