import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function NumberCard1({ number, text, bgColor }) {
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
    <div ref={cardRef} className={`w-full sm:w-1/2 lg:w-1/4 text-[#050307] ${bgColor} rounded-[32px] p-4 sm:p-6 lg:p-8 overflow-hidden m-2 sm:m-3 lg:m-4`}>
      <div ref={contentRef} className="flex flex-col">
        <div className="flex align-text-top">
          <div className="font-almirego font-light text-4xl sm:text-5xl md:text-6xl lg:text-[88px]">
            {number}
          </div>
          <div className="font-almirego font-light pt-1 sm:pt-2 text-2xl sm:text-3xl md:text-4xl lg:text-[48px]">
            +
          </div>
        </div>
        <div className="pt-4 sm:pt-6 lg:pt-8 font-almirego font-light text-base sm:text-lg md:text-xl lg:text-[1.3rem]">
          {text}
        </div>
      </div>
    </div>
  );
}

export default NumberCard1;