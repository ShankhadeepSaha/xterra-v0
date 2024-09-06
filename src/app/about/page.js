"use client"

import ContinuousImageSlider from "@/components/animations/ImageSlider";
import RevolvingSlider from "@/components/animations/RevolvingSlider";
import CircularCarouselSlider from "@/components/animations/RevolvingSlider2";
import SwiperPhotoGallery from "@/components/animations/SwiperPhotoGallery7";
import WordReveal from "@/components/animations/WordReveal";
import Footer from "@/components/footer/Footer";
import HeadingSection from "@/components/HeadingSection";
import HeadingSectionDark from "@/components/HeadingSectionDark";
import Navbar from "@/components/Navbar";
import NumberCard1 from "@/components/numberCardVariants/NumberCard1";
import NumberCard2 from "@/components/numberCardVariants/NumberCard2";
import NumberCard3 from "@/components/numberCardVariants/NumberCard3";
import NumberCard4 from "@/components/numberCardVariants/NumberCard4";
import SectionText from "@/components/SectionText";
import SectionTextDark from "@/components/SectionTextDark";
import SectionTextDarkLarge from "@/components/SectionTextDarkLarge";
import SectionTextLeft from "@/components/SectionTextLeft";
import SectionTextSmall from "@/components/SectionTextSmall";
import Team from "@/components/Team";
import TeamCard1 from "@/components/teamCardVariants/TeamCard1";
import TeamHeading from "@/components/TeamHeading";
import TeamSection from "@/components/TeamSection";
import ValueCard1 from "@/components/valueCardVariants/ValueCard1";
import VideoSection from "@/components/VideoSection";
import TextCard from "@/components/TextCard";
import OurStory from "@/components/OurStory";
import Lenis from "lenis";
import Image from 'next/image'
import { useEffect, useRef } from "react";
import Footercurve from "@/components/footer/Footercurve";
import Testimonials from "@/components/Testimonials";

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
      <SectionTextSmall />
      <VideoSection />

      {/* <ContinuousImageSlider /> */}
      {/* 
      <HeadingSection />

      <SectionTextLeft /> */}

      <div className="bg-[#050307] text-[#F7EDDE]">
        <HeadingSectionDark />
        <SectionTextDark />
        <div className="flex px-24 gap-x-2">
          {/* <NumberCard1 number="100" text="Some text" bgColor="bg-[#FF4524]" />
          <NumberCard1 number="200" text="Other text" bgColor="bg-[#F7EDDE]" />
          <NumberCard1 number="300" text="More text" bgColor="bg-[#3e8372]" />
          <NumberCard1 number="" text="Step Ahead of Wheels" bgColor="bg-[#b5a6ff]" /> */}
          <TextCard text="Go Anywhere" bgColor="bg-[#FF4524]" />
          <TextCard text="Robust & Dynamic" bgColor="bg-[#F7EDDE]" />
          <TextCard text="Expand & Integrate" bgColor="bg-[#3e8372]" />
          <TextCard text="Step Ahead of Wheels" bgColor="bg-[#b5a6ff]" />
        </div>
        <SectionTextDarkLarge />
        {/* <div className="flex px-20 flex-wrap gap-y-4 pb-24">
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
          <ValueCard1 />
        </div> */}
      </div>
      <Team />

      
      <OurStory />



      <Footer />
    </div>
  );
}
