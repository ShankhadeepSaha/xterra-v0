"use client"

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
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
    
      <Footercurve />
      <Footer />
    </div>
  );
}
