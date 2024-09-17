"use client"

import Footer from '@/components/footer/Footer'
import Footercurve from '@/components/footer/Footercurve'
import Navbar from '@/components/navbar/Navbar'
import Comparison from '@/components/robot/Comparison'
import Ctas from '@/components/robot/Ctas'
import DoubleImage from '@/components/robot/DoubleImage'
import Header from '@/components/robot/Header'
import HeroImage from '@/components/robot/HeroImage'
import SectionImage from '@/components/robot/SectionImage'
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";


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

      <Header />
      <HeroImage />
      <DoubleImage />
      <SectionImage />
      <Comparison />
      <Ctas />
      
      <Footercurve />
      <Footer />
    </div>
  );
}