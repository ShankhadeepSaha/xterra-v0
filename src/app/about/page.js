"use client"

import Footer from "@/components/footer/Footer";
import HeadingSectionDark from "@/components/miregoWebsite/HeadingSectionDark";
import Navbar from "@/components/navbar/Navbar";
import SectionText from "@/components/miregoWebsite/SectionText";
import SectionTextDark from "@/components/miregoWebsite/SectionTextDark";
import SectionTextDarkLarge from "@/components/miregoWebsite/SectionTextDarkLarge";
import Team from "@/components/Team";
import TextCard from "@/components/TextCard";
import OurStory from "@/components/OurStory";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Footercurve from "@/components/footer/Footercurve";

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

      <SectionText />

      <div className="bg-[#050307] text-[#F7EDDE]">
        <HeadingSectionDark />
        <SectionTextDark />
        <div className="flex flex-col sm:flex-row flex-wrap px-4 sm:px-8 md:px-16 lg:px-24 gap-4 sm:gap-6 md:gap-8">
          <TextCard text="Go Anywhere" bgColor="bg-[#FF4524]" />
          <TextCard text="Robust & Dynamic" bgColor="bg-[#F7EDDE]" />
          <TextCard text="Expand & Integrate" bgColor="bg-[#3e8372]" />
          <TextCard text="Step Ahead of Wheels" bgColor="bg-[#b5a6ff]" />
        </div>
        <SectionTextDarkLarge />
      </div>
      <Team />
      <OurStory />

      <Footercurve />
      <Footer />
    </div>
  );
}
