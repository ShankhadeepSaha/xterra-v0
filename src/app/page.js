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
import Link from "next/link";
import LeggedRobotics from "@/components/homerobot";
import BlogPage from "@/components/blogpage";
import HomeActuator from "@/components/HomeActuator";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imageSequenceRef = useRef(null);
  const canvasRef = useRef(null);
  const textRef = useRef(null);
  const scrollTextRef = useRef(null);
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

    // Set up scroll text animation
    gsap.set(scrollTextRef.current, { 
      opacity: 1,
      y: 20
    });

    // Create bounce animation for scroll text
    gsap.to(scrollTextRef.current, {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    const scrollTextTl = gsap.timeline({
      scrollTrigger: {
        trigger: imageSequenceRef.current,
        start: "top top",
        end: "+=7%",
        scrub: true
      }
    });

    scrollTextTl.to(scrollTextRef.current, {
      opacity: 0,
      duration: 1
    });

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

    const startScrollOffset = "top+=" + (canvas.height * (138 / images.length));

    gsap.set(textRef.current, { opacity: 0, scale: 1, z: 0 });
    tl.to(textRef.current, {
      opacity: 1,
      scale: 2,
      z: 350,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: imageSequenceRef.current,
        start: startScrollOffset,
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

  const scrollItems = [
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
  ];

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
              <div
                ref={scrollTextRef}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-xl font-light tracking-wider uppercase"
              >
                Scroll Down
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
        <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center'>
          <h2 className='font-medium text-4xl sm:text-4xl md:text-5xl lg:text-[5.5rem] text-[#050307] leading-tight'>
          Revolutionizing Mobility with Advanced Robotics
          </h2>
        </div>
        <div className='text-center max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8'>
          <p className='text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600 leading-relaxed'>
          At xTerra Robotics, we are committed to redefining the future of robotics through innovative legged solutions. Our mission is to enhance human capabilities and seamlessly integrate our technology into everyday life.
          </p>
        </div>
      </div>
      <LeggedRobotics/>
      <HomeActuator />
      <BlogPage/>
      <div className="container mx-auto p-4 mb-8 sm:mb-16 md:mb-24 lg:mb-32">
        <div className="font-almirego text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto"> {/* Added text-center and max-width with margin auto */}
          Interested in learning more?
          <br className="hidden sm:inline" />
          Say{' '}
          <Link href="/contact" className="text-[#4E148C] hover:underline cursor-pointer">
            hi
          </Link>
          , and we'll be in touch soon!
        </div>
      </div>
      <Footercurve items={scrollItems}
        duration={40}
        dotColor="white"
      />
      <Footer />
    </div>
  );
}
