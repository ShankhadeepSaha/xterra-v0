import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

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

    const totalWidth = content.offsetWidth / 2; // Divide by 2 because we duplicated the content
    const animationDuration = 30; // seconds
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;

      const currentTranslate = direction === 'left' ?
        -(elapsed % animationDuration) / animationDuration * totalWidth :
        (elapsed % animationDuration) / animationDuration * totalWidth;
      
      content.style.transform = `translateX(${currentTranslate}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <div 
        ref={contentRef} 
        className="flex items-center"
        style={{ 
          willChange: 'transform',
        }}
      >
        {[...Array(2)].map((_, outerIndex) => (
          <div key={outerIndex} className="flex items-center">
            {logos.map((src, index) => (
              <LogoWrapper key={`${outerIndex}-${index}`} src={src} />
            ))}
          </div>
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
          fill
          sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
          className="object-contain p-2"
        />
      </div>
    </div>
  );
};