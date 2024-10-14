"use client"
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Background from '/public/robot/m2.png';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Section() {
    const containerRef = useRef();
    const videoRef = useRef();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", 'end start']
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            });
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div
        ref={containerRef} 
        className='relative flex items-center justify-center h-screen overflow-hidden'
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
        <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
        <p className='w-full md:w-2/3 lg:w-1/2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl self-end text-right uppercase mix-blend-difference mb-8 sm:mb-0'>
        State-of-the-art, four-legged robotic system, meticulously engineered for exceptional mobility and agility, offering unparalleled terrain navigation capabilities in diverse environments.
            </p>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase mix-blend-difference mt-auto'>
            SVAN M2
            </p>
        </div>
        <div className='absolute top-0 left-0 w-full h-full'>
            <motion.div style={{y}} className='relative w-full h-full'>
                <video 
                    ref={videoRef}
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    loop
                    muted
                    playsInline
                >
                    <source src="/videos/m2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </div>
        </div>
    )
}