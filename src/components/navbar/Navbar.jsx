import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const container2Ref = useRef(null);
  const navbarRef = useRef(null);

  useGSAP(() => {
    const logoElement = logoRef.current;
    const letters = logoElement.textContent.split('');

    // Clear the original text content
    logoElement.textContent = '';

    // Create spans for each letter
    letters.forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      logoElement.appendChild(span);
    });

    // Animate the letters
    gsap.fromTo(
      logoElement.children,
      { y: 0, opacity: 1 },
      {
        y: -1,
        opacity: 0,
        stagger: -0.1,
        duration: 0.1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
      }
    );
  }, { scope: containerRef });

  useGSAP(() => {
    const showAnim = gsap.from(navbarRef.current, { 
      yPercent: -100, 
      paused: true,
      opacity: 0,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if(self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      }
    });
  }, { scope: container2Ref });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div ref={containerRef} className="relative">
      <nav ref={container2Ref} className="fixed top-10 z-20">
        <div ref={navbarRef} className="flex items-center fixed justify-between px-4 w-full">
          <a href="/" className="ps-4 md:ps-12 flex items-center">
            <img src="/images/logo.svg" alt="xterra" className="w-8 md:w-12" />
            <span ref={logoRef} className="text-lg md:text-xl font-bold font-almirego text-[#4E148C]">XTERRA</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex py-2 bg-white/30 backdrop-blur-md rounded-xl w-1/2 items-center justify-center space-x-4">
            {/* <a href="/robots" className="w-1/5 text-center text-base font-almirego text-[#050307]">
              <div className="inline-block">
                <span className="relative">
                  Robots
                  <span className="absolute bottom-0 left-[48%] w-1 h-0.5 bg-black rounded-full transform translate-y-1"></span>
                </span>
              </div>
            </a> */}
            <a href="/robots" className="w-1/5 text-center text-base font-almirego text-[#050307]">Robots</a>
            <a href="/actuators" className="w-1/5 text-center text-base font-almirego text-[#050307]">Actuators</a>
            <a href="/solutions" className="w-1/5 text-center text-base font-almirego text-[#050307]">Solutions</a>
            <a href="/about" className="w-1/5 text-center text-base font-almirego text-[#050307]">About</a>
            <a href="/careers" className="w-1/5 text-center text-base font-almirego text-[#050307]">Careers</a>
          </div>
          
          <div className="hidden md:flex pe-4 md:pe-12 justify-end space-x-2">
          <a href="/news" className="text-[#050307] bg-white/30 backdrop-blur-md font-almirego px-4 md:px-6 py-2 border border-[rgba(165,164,166,.33)] rounded-full text-sm md:text-base">
              News
            </a>
            <a href="/contact" className="text-[#050307] bg-white/30 backdrop-blur-md font-almirego px-4 md:px-6 py-2 border border-[rgba(165,164,166,.33)] rounded-full text-sm md:text-base">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-[#050307]">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[88px] left-0 right-0 bg-white/90 backdrop-blur-md p-4 rounded-b-xl shadow-lg">
            <a href="/robots" className="block py-2 text-center text-base font-almirego text-[#050307]">Robots</a>
            <a href="/actuators" className="block py-2 text-center text-base font-almirego text-[#050307]">Actuators</a>
            <a href="/solutions" className="block py-2 text-center text-base font-almirego text-[#050307]">Solutions</a>
            <a href="/about" className="block py-2 text-center text-base font-almirego text-[#050307]">About</a>
            <a href="/careers" className="block py-2 text-center text-base font-almirego text-[#050307]">Careers</a>
            <a href="/news" className="block py-2 text-center text-base font-almirego text-[#050307]">News</a>
            <a href="/contact" className="block py-2 text-center text-base font-almirego text-[#050307]">Contact</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;