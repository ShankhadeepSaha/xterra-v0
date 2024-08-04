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

        <ImageCard /> 

        <Incubation />

        {/* Feature Section */}
        <div className="py-12" ref={featureRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Advanced Robotics Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our robotics solutions are designed to streamline processes, increase productivity, and reduce costs.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {/* Feature 1 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <img src="https://media.istockphoto.com/id/1220591821/photo/robot-and-human-hand-with-gears.jpg?s=2048x2048&w=is&k=20&c=P_CBS6Hz-aC8Qhehgzt_5e6TA0tj1FpX9gArG9oggPA=" alt="Robotic Arm Icon" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advanced Robotics Solutions</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our robotics solutions are designed to streamline processes, increase productivity, and reduce costs.
                  </dd>
                </div>

                {/* Feature 2 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <img src="/icons/engineering.svg" alt="Engineering Icon" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Innovative Design and Engineering</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    We combine creativity and technical expertise to develop robots that are efficient, reliable, and adaptable.
                  </dd>
                </div>

                {/* Feature 3 */}
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <img src="/icons/scalability.svg" alt="Scalability Icon" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Seamless Integration and Scalability</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Our solutions seamlessly integrate with existing systems and can be scaled to meet evolving needs.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gray-50 py-12" ref={servicesRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <img className="h-64 w-full object-cover rounded-lg" src="/images/service-1.jpg" alt="Service 1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Custom Robotics Development</h3>
                  <p className="mt-2 text-gray-600">
                    We provide tailored robotics solutions to meet your specific requirements, ensuring optimal performance.
                  </p>
                </div>
              </div>
              <div className="flex">
                <img className="h-64 w-full object-cover rounded-lg" src="/images/service-2.jpg" alt="Service 2" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Robotics Consulting</h3>
                  <p className="mt-2 text-gray-600">
                    Our experts offer consulting services to help you implement and optimize robotics in your operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-12 bg-white" ref={benefitsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Benefits of Choosing xTerra Robotics</h2>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <img className="h-10 w-10" src="/icons/efficiency.svg" alt="Efficiency Icon" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Increased Efficiency</h3>
                  <p className="mt-2 text-gray-600">
                    Our solutions help you automate processes, reduce errors, and increase overall efficiency.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <img className="h-10 w-10" src="/icons/cost-saving.svg" alt="Cost Saving Icon" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Cost Savings</h3>
                  <p className="mt-2 text-gray-600">
                    By automating repetitive tasks, you can significantly reduce labor costs and operational expenses.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <img className="h-10 w-10" src="/icons/innovation.svg" alt="Innovation Icon" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Driving Innovation</h3>
                  <p className="mt-2 text-gray-600">
                    Stay ahead of the competition with our innovative robotics solutions that drive business growth.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-indigo-600 text-white py-12" ref={ctaRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold">Ready to Transform Your Business?</h2>
            <p className="mt-4 text-lg">Contact us today to discuss how our robotics solutions can benefit your business.</p>
            <div className="mt-8">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <img className="h-8 w-auto" src="/logo.svg" alt="xTerra Robotics" />
            </div>
            <p className="text-sm">&copy; 2024 xTerra Robotics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
