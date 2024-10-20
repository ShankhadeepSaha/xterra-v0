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
import { useEffect, useRef, useState } from "react";
import Footercurve from "@/components/footer/Footercurve";
import ValueCard from "@/components/miregoWebsite/valueCardVariants/ValueCard";
import Link from 'next/link';


export default function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

      <div className="container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32">
      <div className="font-almirego text-3xl sm:text-4xl md:text-5xl">
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

      <div className="flex flex-col py-12 sm:py-16 md:py-24 lg:py-30 xl:py-14 items-center px-4 sm:px-6 md:px-8">
        <div className="w-full sm:w-11/12 md:w-5/6 lg:w-3/4 flex flex-col">
          <div className="text-[#808080] text-base sm:text-lg md:text-xl lg:text-[20px] font-almirego pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            Let's collaborate
          </div>
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-normal font-almirego text-[#101820] space-y-4">
            Let's start with{" "}
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-40 sm:w-48 md:w-56 lg:w-64"
            />{" "}
            and{" "}
            <input
              type="email"
              placeholder="your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-64 sm:w-72 md:w-80 lg:w-96"
            />{" "}
            .<br />
            Share your ideas{" "}
            <input
              type="message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-64 sm:w-72 md:w-80 lg:w-96"
            />{" "}
            .{" "}
          </div>
          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 border-b-2"></div>
          <div className="flex mt-4 sm:mt-6 md:mt-8 justify-between items-baseline w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="flex gap-4 sm:gap-6 md:gap-8 text-xl sm:text-2xl md:text-3xl font-almirego font-normal">
              {/* Social icons can be added here */}
            </div>
            <button className="px-3 py-2 sm:px-4 sm:py-3 md:p-4 text-xl sm:text-2xl md:text-3xl text-white font-almirego font-normal rounded-xl bg-[#101820] hover:bg-[#2c3e50] transition-colors duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footercurve />
      <Footer />
    </div>
  );
}