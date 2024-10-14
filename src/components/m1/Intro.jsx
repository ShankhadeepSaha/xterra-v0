"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Background from "/public/robot/m1.png";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-4 pt-16 sm:pt-20 md:pt-24">
        <div className="p-4 sm:p-6 md:p-8 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-sans mb-2 sm:mb-3 text-white">
            SVAN M1
          </h1>
          <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-light mb-1 sm:mb-2 text-white">
            SERIES 1
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-2 sm:mt-3 md:mt-4 text-white">
            State-of-the-art, four-legged robotic system, meticulously
            engineered for exceptional mobility and agility, offering
            unparalleled terrain navigation capabilities in diverse
            environments.
          </p>
        </div>
      </div>
    </div>
  );
}
