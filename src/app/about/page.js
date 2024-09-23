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
import Timeline from "@/components/Timeline";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Footercurve from "@/components/footer/Footercurve";
import ValueCard from "@/components/miregoWebsite/valueCardVariants/ValueCard";


export default function Home() {

  const values = [
    { value: "Move fearlessly with focus", number: "1", title: "We move fearlessly with the motivation to make an impact. We are focused in our endeavours and strive to achieve our goals with unwavering determination." },
    { value: "Fuelled by passion", number: "2", title: "Every individual is fuelled by the passion of robotics. We create an environment where each one takes responsibility for their actions and drives forward with a common vision." },
    { value: "Think by first principles", number: "3", title: "We believe in thinking by first principles, questioning assumptions, and seeking fundamental truths. By breaking problems down to their core principles, we can innovate and find unique solutions that challenge the status quo." },
    { value: "Innovate using AI", number: "4", title: "As part of our commitment to innovation, we use artificial intelligence (AI) to revolutionize our robotics solutions. By leveraging Al technology, we aim to enhance the capabilities and performance of our robots, enabling them to adapt and learn from their environment. We strive to push the boundaries of what is possible and deliver cutting-edge solutions that drive progress in the field of robotics." },
  ];

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
        <div className="flex flex-wrap justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 gap-4">         
          <TextCard text="Go Anywhere" bgColor="bg-[#FF4524]" />
          <TextCard text="Robust & Dynamic" bgColor="bg-[#F7EDDE]" />
          <TextCard text="Expand & Integrate" bgColor="bg-[#3e8372]" />
          <TextCard text="Step Ahead of Wheels" bgColor="bg-[#b5a6ff]" />
        </div>
        <SectionTextDarkLarge />
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <ValueCard key={index} number={value.number} title={value.title} value={value.value} />
            ))}
          </div>
        </div>

      </div>
      <Timeline />
      <Team />
      <OurStory />
      <Footercurve />
      <Footer />
    </div>
  );
}