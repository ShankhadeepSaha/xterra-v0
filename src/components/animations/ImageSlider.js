import React, { useRef, useEffect } from 'react';

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
    const animationDuration = 20; // seconds

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
        className="flex whitespace-nowrap"
        style={{ 
          willChange: 'transform',
        }}
      >
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
      </div>
    </div>
  );
};

const Phrase = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 flex items-center justify-center sm:justify-start gap-4 sm:gap-6 py-4">
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-almirego text-center sm:text-left">
        xTerra Robotics
      </p>
    </div>
  );
};