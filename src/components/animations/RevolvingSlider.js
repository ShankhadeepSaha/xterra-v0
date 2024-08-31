import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RevolvingSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalImages = 10;

  const images = [
    '/images/revolvingSlider/image1.png',
    '/images/revolvingSlider/image2.png',
    '/images/revolvingSlider/image3.png',
    '/images/revolvingSlider/image4.png',
    '/images/revolvingSlider/image5.png',
    '/images/revolvingSlider/image6.png',
    '/images/revolvingSlider/image7.png',
    '/images/revolvingSlider/image8.png',
    '/images/revolvingSlider/image9.png',
    '/images/revolvingSlider/image10.png',
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    const items = slider.children;
    const radius = 150; // Adjust this value to change the circle size
    const angleStep = (Math.PI * 2) / totalImages;

    gsap.set(items, {
      position: 'absolute',
      top: '50%',
      left: '50%',
    });

    function layout() {
      for (let i = 0; i < totalImages; i++) {
        const angle = i * angleStep;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        gsap.set(items[i], { x, y, rotation: (angle * 180) / Math.PI });
      }
    }

    layout();

    gsap.to(slider, {
      rotation: -360,
      transformOrigin: 'center center',
      duration: 20,
      ease: 'none',
      repeat: -1,
    });
  }, []);

  const handleNext = () => {
    gsap.to(sliderRef.current, {
      rotation: `-=${360 / totalImages}`,
      duration: 0.5,
      ease: 'power2.inOut',
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    gsap.to(sliderRef.current, {
      rotation: `+=${360 / totalImages}`,
      duration: 0.5,
      ease: 'power2.inOut',
    });
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden">
      <div ref={sliderRef} className="relative w-[300px] h-[300px]">
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute w-[100px] h-[100px]"
          >
            <img src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-md" />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default RevolvingSlider;