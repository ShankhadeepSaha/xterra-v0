"use client"
import ContinuousImageSlider from "@/components/animations/ImageSlider";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Lenis from "lenis";
import WordReveal from '@/components/animations/WordReveal';
import React, { useEffect, useRef, useState } from "react";
import Footercurve from "@/components/footer/Footercurve";

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className="mt-36">
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-almirego">
        <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
          <WordReveal text={"Contact Us"} className='text-4xl sm:text-4xl md:text-5xl lg:text-[6rem] font-bold text-[#050307] leading-tight' />
        </div>
        <div className='flex flex-col lg:flex-row mb-8 sm:mb-12 lg:mb-16'>
          <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
            {/* This div is intentionally left empty as per the original component */}
          </div>
          <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed'>
            <div className='text-decoration-line: underline'>{"Find us Here"} <br /></div>
            {"G-508/11, Avas Vikas No. 1,"} <br />
            {"Kalyanpur, Kanpur-208017"} <br />
          </div>
          <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed'>
            <div className='text-decoration-line: underline'>{"Get In touch"} <br /></div>
            {"+91 94540 07163"} <br />
            {"info@xterrarobotics.com"} <br />
          </div>
          <div className='w-full lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed'>
            <div className='text-decoration-line: underline'>{"Working Hours"} <br /></div>
            {"Mon- Fri: 9am- 8pm"} <br />
            {"Saturday: 10am-4pm"} <br />
          </div>
        </div>
      </div>

      <div className="-mt-20"></div>
      <div className='flex flex-col py-12 sm:py-16 md:py-24 lg:py-32 xl:py-48 items-center px-4 sm:px-6 md:px-8'>
        <div className='w-full sm:w-11/12 md:w-5/6 lg:w-3/4 flex flex-col'>
          <div className='text-[#808080] text-base sm:text-lg md:text-xl lg:text-[20px] font-almirego pb-6 sm:pb-8 md:pb-10 lg:pb-12'>
            We are here for you. How can we help you?
          </div>
          <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-normal font-almirego text-[#101820] space-y-4'>
            Let's start with {' '}
            <input
              type="text"
              placeholder="your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-40 sm:w-48 md:w-56 lg:w-64'
            />
            {' '}and {' '}
            <input
              type="email"
              placeholder="your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-64 sm:w-72 md:w-80 lg:w-96'
            />
            {' '}.<br />What are you looking for? {' '}
            <input
              type="message"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='inline-block text-xl sm:text-2xl md:text-3xl text-[#888888] opacity-80 bg-transparent border-b-2 border-[#888888] focus:outline-none focus:border-[#101820] transition-colors duration-300 w-64 sm:w-72 md:w-80 lg:w-96'
            />
            {' '}.{' '}
          </div>
          <div className='mt-16 sm:mt-20 md:mt-24 lg:mt-32 border-b-2'></div>
          <div className='flex mt-4 sm:mt-6 md:mt-8 justify-between items-baseline w-full sm:w-3/4 md:w-2/3 lg:w-1/2'>
            <div className='flex gap-4 sm:gap-6 md:gap-8 text-xl sm:text-2xl md:text-3xl font-almirego font-normal'>
              {/* Social icons can be added here */}
            </div>
            <button className='px-3 py-2 sm:px-4 sm:py-3 md:p-4 text-xl sm:text-2xl md:text-3xl text-white font-almirego font-normal rounded-xl bg-[#101820] hover:bg-[#2c3e50] transition-colors duration-300'>
              Submit
            </button>
          </div>
        </div>
      </div>



      <div className="-mt-20"></div>
      <ContinuousImageSlider />
      <div className="mt-48"></div>

      {/* New Map Section */}
      <div className="w-full py-12 px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-almirego font-normal text-[#101820] mb-6">Our Location</h2>
        <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14284.828689084382!2d80.26806799999999!3d26.487898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37f2bf0633d1%3A0x9624971835a3adef!2sAwas%20Vikas%2C%20Kalyanpur%2C%20Kanpur%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1692627458965!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <Footercurve />

      <Footer />
    </div>
  );
}