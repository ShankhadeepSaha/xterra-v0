import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeActuator() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image Section */}
        <div className="relative w-full aspect-square overflow-hidden rounded order-last lg:order-first max-w-[500px] mx-auto lg:max-w-none">
          <Image
            src="/actuator/homeactuactor.png"
            alt="xTerra Legged Robot"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content Section */}
        <div className="space-y-8 order-first lg:order-last text-center lg:text-left">
          <div>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#050307] leading-tight mb-6">
              Experience Unmatched Precision with Our Advanced Actuator
              Technology
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our precision actuators are designed to deliver exceptional
              control and power, significantly enhancing robotic movement. With
              seamless integration capabilities, they are essential for
              high-performance robotics across various demanding applications.
            </p>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            <Link href="/actuators">
              <Button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#101820] hover:bg-[#2c3e50] transition-colors duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}