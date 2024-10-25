"use client"

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import Footercurve from "@/components/footer/Footercurve";
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import BlogPage from "@/components/blogpage";
import News from "@/components/News";
import MediaPageSlider from "@/components/MediaPageSlider";


export default function Home() {
  const scrollItems = [
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
    { text: "XTERRA WORLD OF ROBOTICS", showDot: true },
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
      <News />
      <BlogPage />
      <Footercurve
        items={scrollItems}
        duration={40}
        dotColor="white"
      />
      <Footer />
    </div>
  );
}