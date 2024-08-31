import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { GoArrowRight } from 'react-icons/go';

const BlinkingText = ({ icon = false, text, className = '' }) => {
  const containerRef = useRef(null);
  const letterRefs = useRef([]);
  const underlineRef = useRef(null);
  const blinkTimelineRef = useRef(null);
  const underlineTimelineRef = useRef(null);

  const createBlinkTimeline = useCallback(() => {
    const timeline = gsap.timeline({ paused: true });
    letterRefs.current.forEach((letter, index) => {
      timeline.to(letter, {
        opacity: 0,
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }, index * 0.05);
    });
    return timeline;
  }, []);

  const createUnderlineTimeline = useCallback(() => {
    const timeline = gsap.timeline({ paused: true });
    timeline.to(underlineRef.current, {
      width: '100%',
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: stopBlinking
    });
    return timeline;
  }, []);

  const stopBlinking = useCallback(() => {
    if (blinkTimelineRef.current) {
      blinkTimelineRef.current.pause();
      gsap.to(letterRefs.current, { opacity: 1, duration: 0.2 });
    }
  }, []);

  const startAnimations = useCallback(() => {
    if (!blinkTimelineRef.current) blinkTimelineRef.current = createBlinkTimeline();
    if (!underlineTimelineRef.current) underlineTimelineRef.current = createUnderlineTimeline();
    
    blinkTimelineRef.current.play();
    underlineTimelineRef.current.play();
  }, [createBlinkTimeline, createUnderlineTimeline]);

  const resetAnimations = useCallback(() => {
    if (underlineTimelineRef.current) {
      underlineTimelineRef.current.reverse();
    }
    stopBlinking();
  }, [stopBlinking]);

  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener('mouseenter', startAnimations);
    container.addEventListener('mouseleave', resetAnimations);

    return () => {
      container.removeEventListener('mouseenter', startAnimations);
      container.removeEventListener('mouseleave', resetAnimations);
      if (blinkTimelineRef.current) blinkTimelineRef.current.kill();
      if (underlineTimelineRef.current) underlineTimelineRef.current.kill();
    };
  }, [startAnimations, resetAnimations]);

  const renderLetters = useMemo(() => {
    return text.split(" ").map((word, wordIndex) => (
      <React.Fragment key={`word-${wordIndex}`}>
        {word.split('').map((letter, letterIndex) => (
          <span
            key={`${wordIndex}-${letterIndex}`}
            ref={(el) => (letterRefs.current[wordIndex * word.length + letterIndex] = el)}
            className="inline-block"
          >
            {letter}
          </span>
        ))}
        {wordIndex < text.split(" ").length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));
  }, [text]);

  return (
    <div ref={containerRef} className={`relative inline-block cursor-pointer ${className}`}>
      <div className='flex gap-1'>
        {icon && (
          <div className="py-1 inline-block">
            <GoArrowRight />
          </div>
        )}
        <div>{renderLetters}</div>
        {!icon && (
          <div
            ref={underlineRef}
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black"
          />
        )}
      </div>
    </div>
  );
};

export default BlinkingText;