import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function TextCard({ text, bgColor }) {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    gsap.fromTo(content,
      { 
        y: '100%',
        opacity: 0
      },
      { 
        y: '0%',
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 95%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, []);

  return (
    <div ref={cardRef} className={`w-full sm:w-1/2 lg:w-1/4 text-[#050307] ${bgColor} rounded-[32px] p-6 sm:p-8 lg:p-10 overflow-hidden m-2 sm:m-3 lg:m-4`}>
      <div ref={contentRef} className="flex flex-col justify-center h-full">
        <div className="font-almirego font-light text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-tight">
          {text}
        </div>
      </div>
    </div>
  );
}

export default TextCard;