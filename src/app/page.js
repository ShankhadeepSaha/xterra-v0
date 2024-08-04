"use client"

import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/navbars/Navbar2';
import HeroVideo from '@/components/heroVideos/HeroVideo';
import Hero from '@/components/heroes/Hero3';
import Incubation from '@/components/incubationSections/Incubation3';
import BelowHero from '@/components/belowHeroComponents/BelowHero';
import ImageCard from '@/components/imageCards/ImageCard';
import ImageCardAlt from '@/components/imageCards/ImageCardAlt';
import FeatureSection from '@/components/featureSectionComponents/FeatureSection';
import Testimonial from '@/components/testimonials/Testimonial';
import ImageCardSolution from '@/components/imageCards/ImageCardSolution';
import ImageCardSolution2 from '@/components/imageCards/ImageCardSolution2';
import CallToAction from '@/components/callToActions/CallToAction';
import Footer from '@/components/footers/Footer';

export default function Home() {
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const servicesRef = useRef(null);
  const benefitsRef = useRef(null);
  const { ref: ctaRef, inView: ctaInView } = useInView();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      featureRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: featureRef.current, start: 'top 80%' } }
    );
    gsap.fromTo(
      servicesRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: servicesRef.current, start: 'top 80%' } }
    );
    gsap.fromTo(
      benefitsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: benefitsRef.current, start: 'top 80%' } }
    );
  }, []);

  useEffect(() => {
    if (ctaInView) {
      gsap.to(ctaRef.current, { scale: 1.1, duration: 0.5, ease: 'power2.inOut' });
    } else {
      gsap.to(ctaRef.current, { scale: 1, duration: 0.5, ease: 'power2.inOut' });
    }
  }, [ctaInView]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Head>
        <title>xTerra Robotics - Innovative Robotics Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <Navbar />

      <main className="flex-grow">

        {/* Hero Header Section */}
        <Hero ref={heroRef} />

        <BelowHero />

        <ImageCard 
          isFirst={true}
          titleText={"Solving the Locomotion Problem with Cutting-Edge Technology"}
          titleTopic={"Innovative"}
          description={`At Xterra Robotics, we are dedicated to developing world-class solutions that address the complex challenges of locomotion.
                        Our cutting-edge technology is revolutionizing the way robots move, providing innovative solutions for industries such as
                        manufacturing, logistics, and healthcare.`} /> 

        <ImageCardAlt 
          titleText={"Transforming the Way Robots Move in Various Industries"}
          titleTopic={"Cutting-Edge"}
          description={`Experience the power of Xterra Robotics' cutting-edge technology, enabling robots to navigate complex environments with ease. Our solutions are revolutionizing industries such as manufacturing, logistics, and healthcare, providing unprecedented mobility and efficiency.`} /> 

        <ImageCard 
          titleText={"Unlocking the Potential of Robot Mobility"}
          titleTopic={"Innovative"}
          description={`Discover the future of locomotion with Xterra Robotics. Our innovative solutions are transforming the way robots move, unlocking new possibilities in industries such as manufacturing, logistics, and healthcare.`} /> 

        <FeatureSection />

        <Testimonial />

        <ImageCardSolution />

        <ImageCardSolution2 />

        <CallToAction />

        <Footer />
      </main>
    </div>
        
  );
}
