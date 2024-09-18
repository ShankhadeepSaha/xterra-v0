import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

// Example image URLs - replace these with your actual image URLs
const logos = [
    '/images/companylogo/Ansys.svg',
    '/images/companylogo/cadfem.svg',
    '/images/companylogo/eta.png',
    '/images/companylogo/google.png',
    '/images/companylogo/iitk.png',
    '/images/companylogo/nvidia.png'
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-40">
        <InfiniteSlide direction="left" />
      </div>
    </main>
  );
}

const InfiniteSlide = ({ direction }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    const totalWidth = content.offsetWidth;
    const animationDuration = 30; // seconds

    const animate = () => {
      const currentTranslate = direction === 'left' ? 
        -((Date.now() / 1000) % animationDuration) / animationDuration * totalWidth :
        ((Date.now() / 1000) % animationDuration) / animationDuration * totalWidth;
      
      content.style.transform = `translateX(${currentTranslate}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, [direction]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div 
        ref={contentRef} 
        className="flex items-center whitespace-nowrap"
        style={{ 
          willChange: 'transform',
        }}
      >
        {[...Array(2)].map((_, outerIndex) => (
          <React.Fragment key={outerIndex}>
            {logos.map((src, index) => (
              <LogoWrapper key={`${outerIndex}-${index}`} src={src} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const LogoWrapper = ({ src }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 flex items-center justify-center h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56">
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={src}
          alt="Company logo"
          layout="fill"
          objectFit="contain"
          className="p-2"
        />
      </div>
    </div>
  );
};