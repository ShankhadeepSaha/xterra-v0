"use client"

import BlandBrands from "@/components/miregoWebsite/BlandBrands";
import CareerTextSection from "@/components/miregoWebsite/Career";
import CareerTable from "@/components/miregoWebsite/CareerTable";
import CultivateSection from "@/components/miregoWebsite/CultivateSection";
import CultureThatWins from "@/components/miregoWebsite/CultureThatWins";
import Footer from "@/components/miregoWebsite/footer/Footer";
import ImageBento from "@/components/miregoWebsite/ImageBento";
import JobOpenings from "@/components/miregoWebsite/JobOpenings";
import Navbar from "@/components/miregoWebsite/Navbar";
import HomeTextCombo from "@/components/miregoWebsite/HomeTextCombo";
import WordReveal from '@/components/animations/WordReveal';
import ImageZoom from '@/components/ImageZoom';
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Footercurve from "@/components/Footercurve";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="mt-48">
      <Navbar />

      <CultivateSection />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-almirego">
      <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
        <WordReveal text="Are you passionate about robotics and eager to be part of a dynamic team shaping the future of technology?" className='text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-light text-[#050307] leading-tight' />
      </div>
      <div className='flex flex-col lg:flex-row mb-8 sm:mb-12 lg:mb-16'>
        <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
          {/* This div is intentionally left empty as per the original component */}
        </div>
        <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed'>
          xTerra Robotics is a fast-growing startup at the forefront of robotics innovation, and we’re looking for talented individuals to join our ambitious journey. If you’re ready to be challenged, inspired, and contribute to cutting-edge projects, then we want to hear from you.
        </div>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
          {/* This div is intentionally left empty as per the original component */}
        </div>
      </div>
    </div>

      <CareerTable />

      <CultureThatWins />

      <ImageZoom />

      {/* <ImageBento /> */}

      {/* <BlandBrands /> */}

      <JobOpenings />

      <Footercurve />

      <Footer />


    </div>
  );
}
