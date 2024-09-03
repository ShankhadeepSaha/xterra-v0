'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../../../public/images/homeImage.png'
import Lenis from 'lenis';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="overflow-hidden">
      <div ref={container} className="pt-16 sm:pt-24 md:pt-32 lg:pt-40">
        <Slide src={Picture1} direction={'left'} left={"-40%"} progress={scrollYProgress} />
      </div>
    </main>
  );
}

const Slide = (props) => {
  const direction = props.direction == 'left' ? -1 : 1;
  const translateX = useTransform(props.progress, [0, 1], [150 * direction, -150 * direction])
  return (
    <>
      <motion.div style={{ x: translateX, left: props.left }} className="relative flex whitespace-nowrap my-8 sm:my-12 md:my-16 lg:my-20">
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
        <Phrase src={props.src} />
      </motion.div>
    </>
  )
}

const Phrase = ({ src }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-6 py-4">
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-almirego text-center sm:text-left">
      xTerra Robotics
    </p>
    {/* <span className="relative h-12 sm:h-16 md:h-20 lg:h-24 aspect-[4/2] rounded-3xl overflow-hidden">
      <Image src={src} alt="xTerra Robotics logo" layout="fill" objectFit="cover" />
    </span> */}
  </div>
  )
}