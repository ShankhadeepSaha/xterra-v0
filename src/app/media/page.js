"use client"
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import React from 'react';
import BlogPage from "@/components/blogpage";
import News from "@/components/News";

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
      <News />
      <BlogPage />
      <Footer />
    </div>
  );
}