// AnimationHOC.js
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const withFadeInAnimation = (WrappedComponent) => {
  return function WithFadeInAnimation(props) {
    const containerRef = useRef(null);
    const elementRef = useRef(null);

    useGSAP(() => {
      gsap.fromTo(elementRef.current, 
        { 
          y: 50,
          opacity: 0,
        },
        { 
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 70%",
            toggleActions: "play none none none",
            // markers: true
          }
        }
      );
    }, { scope: containerRef });

    return (
      <div ref={containerRef}>
        <div ref={elementRef}>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
};

export default withFadeInAnimation;