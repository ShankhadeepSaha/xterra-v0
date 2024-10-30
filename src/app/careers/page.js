"use client"
import CareerTable from "@/components/CareerTable";
import CultivateSection from "@/components/CultivateSection";
import Footer from "@/components/footer/Footer";
import JobOpenings from "@/components/JobOpenings";
import Navbar from "@/components/navbar/Navbar";
import ImageZoom from '@/components/ImageZoom';
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import BlogSection from "@/components/blog-section";

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
      <CultivateSection />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-almirego">
        <div className='mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center'>
          <h2 className='font-medium text-4xl sm:text-4xl md:text-5xl lg:text-[5.5rem] text-[#050307] leading-tight'>
            Are you passionate about robotics and eager to be part of a dynamic team shaping the future of technology?
          </h2>
        </div>
        <div className='text-center max-w-4xl mx-auto mb-4 sm:mb-6 lg:mb-8'>
          <p className='text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600 leading-relaxed'>
            xTerra Robotics is a fast-growing startup at the forefront of robotics innovation, and we're looking for talented individuals to join our ambitious journey. If you're ready to be challenged, inspired, and contribute to cutting-edge projects, then we want to hear from you.
          </p>
        </div>
      </div>
      <CareerTable />
      <ImageZoom />
      <BlogSection />
      <JobOpenings />
      <Footer />
    </div>
  );
}