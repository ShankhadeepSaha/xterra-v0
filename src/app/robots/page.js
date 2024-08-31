"use client"

import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Comparison from '@/components/robot/Comparison'
import Ctas from '@/components/robot/Ctas'
import DoubleImage from '@/components/robot/DoubleImage'
import Header from '@/components/robot/Header'
import HeroImage from '@/components/robot/HeroImage'
import PhotosWithHeading1 from '@/components/robot/PhotosWithHeading1'
import PhotosWithHeading2 from '@/components/robot/PhotosWithHeading2'
import SectionImage from '@/components/robot/SectionImage'
import React from 'react'

export default function page() {
  return (
    <div className="mt-48">
        <Navbar />

        <Header />
        <HeroImage />
        <DoubleImage />
        <SectionImage />
        <Comparison />
        {/* <PhotosWithHeading1 />
        <PhotosWithHeading2 /> */}
        <Ctas />
        <Footer />
    </div>
  )
}