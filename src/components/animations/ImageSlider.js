'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Picture1 from '../../../public/images/homeImage.png'
import Picture2 from '../../../public/images/homeImage.png'
import Picture3 from '../../../public/images/homeImage.png'
import Lenis from 'lenis';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Footercurve from '../footer/Footercurve';

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
        <Slide src={Picture2} direction={'right'} left={"-25%"} progress={scrollYProgress} />
        <Slide src={Picture3} direction={'left'} left={"-65%"} progress={scrollYProgress} />
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
    <div className={'px-3 sm:px-2 md:px-3 flex gap-3 sm:gap-2 md:gap-2 items-center'}>
      <p className='text-[3vw] text-[black] font-almirego'>xTerra Robotics</p>
      <span className="relative h-[3vw] aspect-[4/2] rounded-3xl overflow-hidden">
        <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
      </span>
    </div>
  )
}