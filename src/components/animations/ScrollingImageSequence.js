import React, { useCallback, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollingImageSequence = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [error, setError] = useState(null);

  const setUpScrollSequence = useCallback((canvas) => {
    if (!canvas) return; // Exit if canvas is null

    const context = canvas.getContext('2d');
    const frameCount = 180; // Adjust this to your total number of frames
    const currentFrame = index => (
      `/public/m2/frame_${index.toString().padStart(4, '0')}.jpg`
    );

    const images = [];
    const sequence = {
      frame: 0
    };

    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }

      return Promise.all(images.map((img, index) => new Promise((resolve, reject) => {
        img.onload = () => {
          console.log(`Image ${index} loaded successfully`);
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image ${index}: ${img.src}`);
          reject(new Error(`Failed to load image ${index}`));
        };
      })));
    };

    preloadImages()
      .then(() => {
        console.log('All images loaded successfully');
        setImagesLoaded(true);

        canvas.width = images[0].width;
        canvas.height = images[0].height;
        setCanvasSize({ width: canvas.width, height: canvas.height });

        context.drawImage(images[0], 0, 0, canvas.width, canvas.height);

        gsap.to(sequence, {
          frame: frameCount - 1,
          snap: 'frame',
          ease: 'none',
          scrollTrigger: {
            trigger: canvas.parentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.5
          },
          onUpdate: () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[sequence.frame], 0, 0, canvas.width, canvas.height);
          }
        });
      })
      .catch((err) => {
        console.error('Error loading images:', err);
        setError(err.message);
      });

  }, []);

  useEffect(() => {
    // Log the current state of imagesLoaded
    console.log('Images loaded:', imagesLoaded);
  }, [imagesLoaded]);

  return (
    <div className="h-[300vh] relative">
      <div className="sticky top-0 w-full h-screen flex items-center justify-center">
        {error ? (
          <div className="text-2xl text-red-500">Error: {error}</div>
        ) : imagesLoaded ? (
          <canvas 
            ref={setUpScrollSequence}
            width={canvasSize.width}
            height={canvasSize.height}
            className="max-w-full max-h-full"
          />
        ) : (
          <div className="text-2xl">Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ScrollingImageSequence;