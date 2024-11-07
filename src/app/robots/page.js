"use client"
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Header from '@/components/robot/Header'
import RobotProducts from '@/components/robot/RobotProducts'
import Lenis from "lenis";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link';

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
      <RobotProducts />
      <div className="container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32">
        <div className="font-poppins text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto"> {/* Added text-center and max-width with margin auto */}
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
      <Footer />
    </div>
  );
}