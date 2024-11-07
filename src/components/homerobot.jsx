import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LeggedRobotics() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content Section */}
        <div className="space-y-8 text-center lg:text-left">
          <div>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#050307] leading-tight mb-6">
              Unleashing the Power of Legged Robotics
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our legged robots, including the SVAN series, redefine mobility
              with unmatched agility and performance. Designed for challenging
              terrains, they outperform traditional wheeled robots in
              versatility and adaptability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center lg:text-left">
              <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl text-[#050307] mb-4">
                Superior Performance
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Engineered for resilience, our robots excel in diverse
                industrial applications and environments.
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-poppins text-xl sm:text-2xl md:text-3xl text-[#050307] mb-4">
                Innovative Design
              </h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Combining advanced technology with user-centric design for
                optimal functionality and efficiency.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="/robots">
              <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#101820] hover:bg-[#2c3e50] transition-colors duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="aspect-square w-full h-full max-w-[500px] mx-auto lg:max-w-none">
          <div className="relative w-full aspect-square overflow-hidden rounded">
            <Image
              src="/robot/f7.png"
              alt="xTerra Legged Robot"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}