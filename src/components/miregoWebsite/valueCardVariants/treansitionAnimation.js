import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function AnimatedValueCard() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;

    gsap.set(card2, { x: '100%' });

    const tl = gsap.timeline({ paused: true });
    tl.to(card1, { x: '-100%', duration: 0.5, ease: 'power2.inOut' })
      .to(card2, { x: '0%', duration: 0.5, ease: 'power2.inOut' }, 0);

    const handleMouseEnter = () => {
      setIsHovered(true);
      tl.play();
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      tl.reverse();
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className='px-2 aspect-[2/3] w-1/4 relative overflow-hidden'>
      <div ref={card1Ref} className="absolute inset-0">
        <ValueCard1 />
      </div>
      <div ref={card2Ref} className="absolute inset-0">
        <ValueCardOverlay1 />
      </div>
    </div>
  );
}

function ValueCard1() {
  return (
    <div className="h-full justify-between rounded-[32px] border border-white p-8">
      <div className="flex flex-col justify-between h-1/4">
        <div className="flex space-x-2">
          <div className="rounded-full border border-white px-4 py-1">Value</div>
          <div className="rounded-xl border border-white px-2 py-1">05</div>
        </div>
        <div className="pt-20 font-almirego font-normal leading-tight text-[2.5rem]">Embrace change as a way of life</div>
      </div>
    </div>
  );
}

function ValueCardOverlay1() {
    return (
        <div className='px-2 aspect-[2/3] w-1/4'>
            <div className="h-full justify-between rounded-[32px] border border-white p-8">
                <div className="flex flex-col justify-between h-1/4">
                    <div className="flex space-x-2">
                        <div className="rounded-full border border-white px-4 py-1">Value</div>
                        <div className="rounded-xl border border-white px-2 py-1">02</div>
                    </div>
                    <div className="pt-20 font-almirego font-normal leading-tight text-xl">Everyday, we have got to provide a constant effort to remain industry leaders so that renowned companies keep trusting us with their business</div>
                </div>
    
                {/* <lottie-player className="_illustration_fj3w8y" speed="1" loop="" autoplay="" background="transparent"></lottie-player> */}
            </div>
        </div>
      )
}

export default AnimatedValueCard;