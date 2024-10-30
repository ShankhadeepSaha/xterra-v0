"use client"
import Footer from "@/components/footer/Footer";
import HeadingSectionDark from "@/components/HeadingSectionDark";
import Navbar from "@/components/navbar/Navbar";
import SectionText from "@/components/SectionText";
import SectionTextDark from "@/components/SectionTextDark";
import SectionTextDarkLarge from "@/components/SectionTextDarkLarge";
import Team from "@/components/Team";
import TextCard from "@/components/TextCard";
import OurStory from "@/components/OurStory";
import Timeline from "@/components/Timeline";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import ValueCard from "@/components/ValueCard";
import Link from 'next/link';
import BlogPage from "@/components/blogpage";

export default function Home() {

  const values = [
    { value: "Move fearlessly with focus", title: "We move fearlessly with the motivation to make an impact. We are focused in our endeavours and strive to achieve our goals with unwavering determination." },
    { value: "Fuelled by passion", title: "Every individual is fuelled by the passion of robotics. We create an environment where each one takes responsibility for their actions and drives forward with a common vision." },
    { value: "Think by first principles", title: "We believe in thinking by first principles, questioning assumptions, and seeking fundamental truths. By breaking problems down to their core principles, we can innovate and find unique solutions that challenge the status quo." },
    { value: "Innovate using AI", title: "As part of our commitment to innovation, we use artificial intelligence (AI) to revolutionize our robotics solutions. By leveraging Al technology, we aim to enhance the capabilities and performance of our robots, enabling them to adapt and learn from their environment. We strive to push the boundaries of what is possible and deliver cutting-edge solutions that drive progress in the field of robotics." },
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
          <TextCard text="Go Anywhere" bgColor="bg-[#FF755C]" />
          <TextCard text="Robust & Dynamic" bgColor="bg-[#F7EDDE]" />
          <TextCard text="Expand & Integrate" bgColor="bg-[#3e8372]" />
          <TextCard text="Step Ahead of Wheels" bgColor="bg-[#b5a6ff]" />
        </div>
        <SectionTextDarkLarge />
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <ValueCard key={index} title={value.title} value={value.value} />
            ))}
          </div>
        </div>
      </div>
      <Timeline />
      <Team />
      <OurStory />
      <BlogPage/>
      <div className="container mx-auto p-4 mb-8 sm:mb-16 md:mb-24 lg:mb-32">
        <div className="font-almirego text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto"> {/* Added text-center and max-width with margin auto */}
          Have You Discovered
          <br className="hidden sm:inline" />
          Our{' '}
          <Link href="/robots" className="text-[#4E148C] hover:underline cursor-pointer">
            Robots
          </Link>
          ,{' '}
          <Link href="/actuators" className="text-[#4E148C] hover:underline cursor-pointer">
            Actuators
          </Link>
          , and{' '}
          <Link href="/solutions" className="text-[#4E148C] hover:underline cursor-pointer">
            Solutions
          </Link>
          ?
        </div>
      </div>
      <Footer />
    </div>
  );
}