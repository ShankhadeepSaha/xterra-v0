"use client"

import Footer from '@/components/footer/Footer'
import Footercurve from '@/components/footer/Footercurve'
import Description from '@/components/m2/Description';
import HorizontalScroll from '@/components/m2/HorizontalScroll';
import Intro from '@/components/m2/Intro';
import Section from '@/components/m2/Section';
import Navbar from '@/components/navbar/Navbar'
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from "react";



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
    <div>
      <Navbar />
      <Intro />
      <Description />
      <Section />
      <HorizontalScroll />
      <Footercurve />
      <Footer />
    </div>
  );
}