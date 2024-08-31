import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WordReveal = ({ text, className }) => {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  useGSAP(() => {
    // Set initial state for all words
    gsap.set(wordsRef.current, { 
      y: '100%', 
      opacity: 0 
    });

    // Create the animation for all words
    gsap.to(wordsRef.current, {
      y: '0%',
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 70%",
        toggleActions: "play none none none",
        // markers: true
      }
    });
  }, { scope: containerRef });

  // Split the text into words
  const words = text.split(' ');

  return (
    <div ref={containerRef} className={`${className}`} style={{ overflow: 'hidden', display: 'inline-block', position: 'relative' }}>
      {words.map((word, wordIndex) => (
        <div 
          key={wordIndex} 
          ref={el => wordsRef.current[wordIndex] = el} 
          style={{ display: 'inline-block', position: 'relative', marginRight: '0.3em' }}
        >
          {word.split('').map((char, charIndex) => (
            <span key={charIndex} className="char" style={{ display: 'inline-block' }}>
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordReveal;