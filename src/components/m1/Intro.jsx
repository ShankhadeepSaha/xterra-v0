"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Background from "/public/robot/f9.png";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          priority
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-center p-4 pt-16 sm:pt-20 md:pt-24">
        <motion.div 
          className="p-10 sm:p-6 md:p-8 rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          <motion.h1 
            variants={textVariants}
            className="text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold font-poppins mt-8 sm:mt-4 md:mt-4 lg:mt-4 mb-2 sm:mb-3 text-white"
          >
            SVAN M1
          </motion.h1>
          <motion.p 
            variants={textVariants}
            className="text-base sm:text-base md:text-lg lg:text-xl font-light mt-4 sm:mt-3 md:mt-4 text-white"
          >
            Our first prototype quadruped robot
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}