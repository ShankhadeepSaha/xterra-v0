"use client"

import Footer from '@/components/footer/Footer'
import Footercurve from '@/components/footer/Footercurve'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/robot/Header'
import RobotProducts from '@/components/robot/RobotProducts'
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import BlogSection from '@/components/blog-section'


export default function Home() {
  const scrollItems = [
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

      <RobotProducts />


      {/* <BlogSection/> */}
      {/* <DoubleImage /> */}
      {/* <SectionImage /> */}
      {/* <Comparison /> */}
      {/* <Ctas /> */}

      <div className="container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32">
        <div className="font-almirego text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto"> {/* Added text-center and max-width with margin auto */}
          Have You Discovered
          <br className="hidden sm:inline" />
          Our{' '}
          <Link href="/actuators" className="text-[#4E148C] hover:underline cursor-pointer">
          Actuators
          </Link>
          {' '}and{' '}
          <Link href="/solutions" className="text-[#4E148C] hover:underline cursor-pointer">
            Solutions
          </Link>
          ?
        </div>
      </div>


      <div>
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
      </div>

      <Footercurve items={scrollItems}
        duration={40}
        dotColor="white"
      />
      <Footer />
    </div>
  );
}