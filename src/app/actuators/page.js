"use client"
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import ActuatorsProducts from '@/components/ActuatorsProducts'
import Lenis from "lenis";
import React, { useEffect, useState } from "react";
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
      {/* <Header /> */}
      <div className="font-almirego">
        <div className='container mx-auto px-4 flex flex-col items-center mb-16 sm:mb-24 lg:mb-32'>
          <div className='w-full text-center mb-8'>
            <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>
              Actuators
            </h1>
          </div>
          <div className='w-full max-w-3xl'>
            <p className='text-l sm:text-xl md:text-2xl lg:text-3xl font-poppins font-light leading-tight text-center'>
              Precision-engineered actuators designed to deliver superior control and power, ensuring smooth, responsive movements with unmatched durability, optimized for high-performance applications in robotic systems.
            </p>
          </div>
        </div>
      </div>
      <ActuatorsProducts />
      <div className="container mx-auto p-4 my-8 sm:my-16 md:my-24 lg:my-32">
        <div className="font-almirego text-3xl sm:text-4xl md:text-5xl text-center max-w-5xl mx-auto"> {/* Added text-center and max-width with margin auto */}
          Interested in learning more?
          <br className="hidden sm:inline" />
          Say{' '}
          <Link href="/contact" className="text-[#4E148C] hover:underline cursor-pointer">
            hi
          </Link>
          , and we'll be in touch soon!
        </div>
      </div>
      <Footer />
    </div>
  );
}