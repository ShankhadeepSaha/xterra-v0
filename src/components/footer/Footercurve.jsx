// components/InfiniteScrollText/index.jsx
import React, { useState } from 'react';

const InfiniteScrollText = ({
  items,
  className = "",
  dotColor = "#3C5B6F",
  duration = 40
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const repeatedContent = [...items, ...items, ...items];

  return (
    <div 
      className={`
        relative w-full overflow-x-hidden whitespace-nowrap
        pb-8 sm:pb-12 md:pb-16 lg:pb-20  // Added responsive bottom padding
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px]
        before:bg-gradient-to-r before:from-background before:to-transparent
        after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px]
        after:bg-gradient-to-l after:from-background after:to-transparent
        ${className}
      `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div
        className={`
          inline-block transform-gpu animate-scroll
          ${isPaused ? 'pause' : ''}
        `}
        style={{
          animationDuration: `${duration}s`
        }}
      >
        {repeatedContent.map((item, idx) => (
          <div 
            key={`${item.text}-${idx}`}
            className="inline-flex items-center"
          >
            <span className={`
              inline-block
              text-[5vw] md:text-[5vw] lg:text-[5vw] xl:text-[6vw]
              font-almirego
              transition-transform duration-300
              ${isPaused ? 'hover:scale-105 cursor-pointer' : ''}
            `}>
              {item.text}
            </span>
            {item.showDot && (
              <span
                className={`
                  inline-block rounded-full
                  mx-[2vw]
                  h-[25px] w-[25px]
                  md:h-[40px] md:w-[40px]
                  lg:h-[50px] lg:w-[50px]
                  xl:h-[70px] xl:w-[70px]
                  transition-transform duration-300
                  ${isPaused ? 'hover:scale-110' : ''}
                `}
                style={{ backgroundColor: dotColor }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollText;