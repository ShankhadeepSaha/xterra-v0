import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Incubation() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    );

    textRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div
      className="py-16 h-screen flex items-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url(/images/svanM2IITK.jpeg)' }}
      ref={sectionRef}
    >
      <div className="w-full h-screen flex items-center bg-gray-900 bg-opacity-60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="lg:text-center">
            <h2
              className="text-base text-indigo-400 font-semibold tracking-wide uppercase"
              ref={(el) => (textRefs.current[0] = el)}
            >
              About Us
            </h2>
            <p
              className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl"
              ref={(el) => (textRefs.current[1] = el)}
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              An Indian Deep-Tech Robotics Startup
            </p>
            <p
              className="mt-4 max-w-2xl text-xl lg:mx-auto"
              ref={(el) => (textRefs.current[2] = el)}
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              A team of highly skilled and passionate engineers developing
              world-class solutions to solve the locomotion problem.
            </p>
          </div>

          <div className="mt-10">
            <dl className="flex-col items-center space-y-10 md:space-y-0 md:grid md:grid-cols-1 text-center md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt
                  className="text-lg leading-6 font-medium"
                  ref={(el) => (textRefs.current[3] = el)}
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Incubated at IIT Kanpur
                </dt>
                <dd
                  className="mt-2 text-base"
                  ref={(el) => (textRefs.current[4] = el)}
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Our startup is incubated at the prestigious IIT Kanpur, India,
                  benefiting from world-class facilities and mentorship.
                </dd>
              </div>

              <div className="relative">
                <dt
                  className="text-lg leading-6 font-medium"
                  ref={(el) => (textRefs.current[5] = el)}
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Spin-off from Mobile Robotics Laboratory
                </dt>
                <dd
                  className="mt-2 text-base"
                  ref={(el) => (textRefs.current[6] = el)}
                  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
                >
                  Our team is a spin-off from the renowned Mobile Robotics
                  Laboratory at IIT Kanpur, bringing cutting-edge research to
                  the real world.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incubation;
