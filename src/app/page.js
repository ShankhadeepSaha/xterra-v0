"use client"

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from "@/components/navbar/Navbar";
import FutureOrganizations from "@/components/miregoWebsite/FutureOrganisations";
import HomeTextCombo from "@/components/miregoWebsite/HomeTextCombo";
import HomeTestimonials from "@/components/miregoWebsite/HomeTestimonials";
import ContactUs from "@/components/miregoWebsite/ContactUs";
import Footer from "@/components/footer/Footer";
import LandingPostText from "@/components/miregoWebsite/LandingPostText";
import CultureThatWins from "@/components/miregoWebsite/CultureThatWins";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Footercurve from '@/components/footer/Footercurve';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const imageSequenceRef = useRef(null);
  const canvasRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [images, setImages] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [])

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  };

  const preloadImages = useCallback(async () => {
    const frameCount = isMobile ? 90 : 180; // Reduce frames for mobile
    const step = isMobile ? 2 : 1; // Load every other frame for mobile
    const imageSources = Array.from({ length: frameCount }, (_, i) =>
      `/m2/frame_${((i * step) + 1).toString().padStart(4, '0')}.webp`
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
    window.addEventListener('resize', resizeCanvas);

    const sequence = { frame: 0 };

    gsap.to(sequence, {
      frame: images.length - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: imageSequenceRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? 0.2 : 0.5,
      },
      onUpdate: () => {
        const img = images[Math.round(sequence.frame)];
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    });

    // Initial render
    const img = images[0];
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    context.drawImage(img, x, y, img.width * scale, img.height * scale);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
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
      {/* <TextScramble /> */}

      <div ref={imageSequenceRef} className="h-[300vh] relative">
        <div className="sticky top-0 w-full h-screen">
          {imagesLoaded ? (
            <canvas ref={canvasRef} className="w-full h-full" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-2xl">Loading...</p>
            </div>
          )}
        </div>
      </div>

      <LandingPostText />
      <CultureThatWins />
      {/* <HomeTextCombo
        heading={'Why xTerra'}
        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys '}
        cta={'Discover our vision of the future'}
      />
      <GridSection /> */}
      <HomeTextCombo
        heading={'Building for the future'}
        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled itLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys '}
        cta={'Discover our vision of the future'}
      />
      <HomeTestimonials />
      <ContactUs />
      <Footercurve />
      <Footer />
    </div>
  );
}