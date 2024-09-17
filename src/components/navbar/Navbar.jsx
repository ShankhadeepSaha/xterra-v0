import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Utility functions
const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (ev) => {
  return {
    x: ev.clientX,
    y: ev.clientY,
  };
};

const distance = (x1, y1, x2, y2) => {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.hypot(a, b);
};

const MagneticButton = ({ children, href, className }) => {
  const buttonRef = useRef(null);
  const [mousepos, setMousepos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const [buttonRect, setButtonRect] = useState({ width: 0, height: 0, left: 0, top: 0 });
  
  const distanceToTrigger = useMemo(() => buttonRect.width * 0.7, [buttonRect.width]);

  const updateMousePos = useCallback((ev) => {
    setMousepos(getMousePos(ev));
  }, []);

  useEffect(() => {
    const calcSizePosition = () => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setButtonRect({ width: rect.width, height: rect.height, left: rect.left, top: rect.top });
      }
    };

    calcSizePosition();
    window.addEventListener('resize', calcSizePosition);
    window.addEventListener('mousemove', updateMousePos);

    return () => {
      window.removeEventListener('resize', calcSizePosition);
      window.removeEventListener('mousemove', updateMousePos);
    };
  }, [updateMousePos]);

  useEffect(() => {
    let animationFrameId;
    let tx = 0;
    let ty = 0;

    const render = () => {
      const distanceMouseButton = distance(
        mousepos.x + window.scrollX,
        mousepos.y + window.scrollY,
        buttonRect.left + buttonRect.width / 2,
        buttonRect.top + buttonRect.height / 2
      );

      const isHovering = distanceMouseButton < distanceToTrigger;
      setIsHovered(isHovering);

      if (isHovering) {
        tx = lerp(tx, (mousepos.x + window.scrollX - (buttonRect.left + buttonRect.width / 2)) * 0.3, 0.1);
        ty = lerp(ty, (mousepos.y + window.scrollY - (buttonRect.top + buttonRect.height / 2)) * 0.3, 0.1);
      } else {
        tx = lerp(tx, 0, 0.1);
        ty = lerp(ty, 0, 0.1);
      }

      if (buttonRef.current) {
        buttonRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousepos, buttonRect, distanceToTrigger]);

  return (
    <a 
      ref={buttonRef}
      href={href}
      className={`${className} transition-all duration-300 ease-out ${
        isHovered ? 'scale-105 border-black' : 'border-[rgba(165,164,166,.33)]'
      }`}
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const container2Ref = useRef(null);
  const navbarRef = useRef(null);

  useGSAP(() => {
    const logoElement = logoRef.current;
    const letters = logoElement.textContent.split('');

    logoElement.textContent = '';

    letters.forEach((letter) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.display = 'inline-block';
      logoElement.appendChild(span);
    });

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
            <span ref={logoRef} className="text-lg md:text-xl font-bold font-almiregodb text-[#4E148C]">XTERRA</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex py-2 bg-white/30 backdrop-blur-md rounded-xl w-1/2 items-center justify-center space-x-4">
            <a href="/robots" className="w-1/5 text-center text-base font-almirego text-[#050307]">Robots</a>
            <a href="/actuators" className="w-1/5 text-center text-base font-almirego text-[#050307]">Actuators</a>
            <a href="/solutions" className="w-1/5 text-center text-base font-almirego text-[#050307]">Solutions</a>
            <a href="/about" className="w-1/5 text-center text-base font-almirego text-[#050307]">About</a>
            <a href="/careers" className="w-1/5 text-center text-base font-almirego text-[#050307]">Careers</a>
          </div>
          
          <div className="hidden md:flex pe-4 md:pe-12 justify-end space-x-2">
            <MagneticButton 
              href="/news" 
              className="text-[#050307] bg-white/30 backdrop-blur-md font-almirego px-4 md:px-6 py-2 border rounded-full text-sm md:text-base inline-block"
            >
              News
            </MagneticButton>
            <MagneticButton 
              href="/contact" 
              className="text-[#050307] bg-white/30 backdrop-blur-md font-almirego px-4 md:px-6 py-2 border rounded-full text-sm md:text-base inline-block"
            >
              Contact
            </MagneticButton>
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