import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function NumberCard1({number, text}) {
    const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    gsap.fromTo(content,
      { 
        y: '100%',  // Start from below
        opacity: 0
      },
      { 
        y: '0%',    // Move to original position
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 95%",
          end: "top 95%",
          toggleActions: "play none none reverse",
        //   markers: true
        }
      }
    );
  }, []);
  return (
    <>
        <div ref={cardRef} className={`w-1/4 text-[#050307] bg-[#3e8372] rounded-[32px] p-8`}>
            <div ref={contentRef} className='flex flex-col'>
            <div className='flex align-text-top'>
                    <div className='font-almirego font-light text-[88px]'>
                        {number}
                    </div>
                    <div className='font-almirego font-light pt-2 text-[48px]'>
                        +
                    </div>
                </div>
                <div className='pt-8 font-almirego font-light text-[1.3rem]'>
                    {text}
                </div>
            </div>
        </div>
    </>
  )
}

export default NumberCard1