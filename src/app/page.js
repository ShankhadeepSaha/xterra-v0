"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Navbar from "@/components/navbar/Navbar";
import FutureOrganizations from "@/components/miregoWebsite/FutureOrganisations";
import HomeTextCombo from "@/components/miregoWebsite/HomeTextCombo";
import ContactUs from "@/components/miregoWebsite/ContactUs";
import Footer from "@/components/footer/Footer";
import LandingPostText from "@/components/miregoWebsite/LandingPostText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Footercurve from "@/components/footer/Footercurve";
import OurStory from "@/components/OurStory";
import WordReveal from '@/components/animations/WordReveal';
import BlogSection from "@/components/blog-section";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imageSequenceRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const preloadImages = useCallback(async () => {
    const frameCount = isMobile ? 120 : 240;
    const step = isMobile ? 2 : 1;
    const imageSources = Array.from({ length: frameCount }, (_, i) =>
      `/m2/frame_${((i * step) + 1).toString().padStart(4, "0")}.webp`
    );

    try {
      const loadedImages = await Promise.all(imageSources.map(loadImage));
      setImages(loadedImages);
      setImagesLoaded(true);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  }, [isMobile]);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  const setupScrollSequence = useCallback(() => {
    if (!canvasRef.current || !imagesLoaded || images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const sequence = { frame: 0 };

    const renderImage = (index) => {
      const img = images[index];
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageSequenceRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? 0.2 : 0.5,
      },
    });

    tl.to(sequence, {
      frame: images.length - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.round(sequence.frame);
        renderImage(frameIndex);
      },
    });

    // Adjusting the second animation to start at frame 138 (when the first would have started)
    const startScrollOffset = "top+=" + (canvas.height * (138 / images.length));

    // Add text animation (adjusted to start at frame 138)
    gsap.set(textRef.current, { opacity: 0, scale: 1, z: 0 });
    tl.to(textRef.current, {
      opacity: 1,
      scale: 2,
      z: 350,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imageSequenceRef.current,
        start: startScrollOffset, // Starting from frame 138 equivalent scroll position
        end: "bottom bottom",
        scrub: true,
      },
    });

    renderImage(0);

    ScrollTrigger.create({
      trigger: imageSequenceRef.current,
      start: "bottom bottom",
      onEnter: () => renderImage(images.length - 1),
      onEnterBack: () => renderImage(images.length - 1),
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [imagesLoaded, images, isMobile]);

  useEffect(() => {
    if (imagesLoaded && images.length > 0) {
      setupScrollSequence();
    }
  }, [imagesLoaded, images, setupScrollSequence]);

  return (
    <div>
      <Navbar />
      <FutureOrganizations />

      <div ref={imageSequenceRef} className="h-[350vh] relative">
        <div className="sticky top-0 w-full h-screen">
          {imagesLoaded ? (
            <>
              <canvas ref={canvasRef} className="w-full h-full" />
              <div
                ref={textRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl md:text-7xl font-bold text-center"
              >
                Striding into tomorrow
              </div>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-2xl">Loading...</p>
            </div>
          )}
        </div>
      </div>
      <OurStory />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-almirego">
        <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
          <WordReveal text="Building robots for the future" className='text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-light text-[#050307] leading-tight' />
        </div>
        <div className='flex flex-col lg:flex-row mb-8 sm:mb-12 lg:mb-16'>
          <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
            {/* This div is intentionally left empty as per the original component */}
          </div>
          <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed'>
            xTerra is an Indian Deep-Tech Robotics Startup, founded by a team of highly skilled and passionate engineers. Incubated at IIT Kanpur and spun off from the Mobile Robotics Laboratory at IIT Kanpur, we are committed to solving complex locomotion challenges with world-class solutions.
          </div>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
            {/* This div is intentionally left empty as per the original component */}
          </div>
        </div>
      </div>
      <BlogSection/>
      <ContactUs />
      <Footercurve />
      <Footer />
    </div>
  );
}
