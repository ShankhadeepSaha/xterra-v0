import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll state
      setHasScrolled(currentScrollY > 50);
      
      // Determine scroll direction and update visibility
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      const handleScroll = () => {
        setIsMenuOpen(false);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <nav 
        ref={navbarRef} 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          hasScrolled ? 'top-0' : 'top-10'
        } ${!isVisible ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className={`w-full transition-all duration-500 ease-in-out ${
          hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
          <div className={`max-w-7xl mx-auto flex items-center justify-between px-4 transition-all duration-500 ease-in-out ${
            hasScrolled ? 'py-4' : 'py-2'
          }`}>
            <a href="/" className="ps-4 lg:ps-12 flex items-center">
              <img src="/images/logo.svg" alt="xterra" className="w-8 lg:w-12" />
              <span className="text-lg lg:text-xl font-bold font-almiregodb text-[#4E148C]">
                XTERRA
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className={`hidden lg:flex py-2 rounded-xl w-1/2 items-center justify-center space-x-4 transition-all duration-500 ease-in-out ${
              hasScrolled ? '' : 'bg-white/30 backdrop-blur-md'
            }`}>
              <a href="/robots" className="w-1/5 text-center text-base font-almirego text-[#050307] hover:opacity-70 transition-opacity duration-300">Robots</a>
              <a href="/actuators" className="w-1/5 text-center text-base font-almirego text-[#050307] hover:opacity-70 transition-opacity duration-300">Actuators</a>
              <a href="/solutions" className="w-1/5 text-center text-base font-almirego text-[#050307] hover:opacity-70 transition-opacity duration-300">Solutions</a>
              <a href="/about" className="w-1/5 text-center text-base font-almirego text-[#050307] hover:opacity-70 transition-opacity duration-300">About</a>
              <a href="/careers" className="w-1/5 text-center text-base font-almirego text-[#050307] hover:opacity-70 transition-opacity duration-300">Careers</a>
            </div>
            
            <div className="hidden lg:flex pe-4 lg:pe-12 justify-end space-x-2">
              <a 
                href="/media" 
                className={`text-[#050307] font-almirego px-4 lg:px-6 py-2 border rounded-full text-sm lg:text-base hover:scale-105 transition-all duration-300 ease-in-out ${
                  hasScrolled ? 'border-gray-200 hover:border-gray-400' : 'bg-white/30 backdrop-blur-md'
                }`}
              >
                Media
              </a>
              <a 
                href="/contact" 
                className={`text-[#050307] font-almirego px-4 lg:px-6 py-2 border rounded-full text-sm lg:text-base hover:scale-105 transition-all duration-300 ease-in-out ${
                  hasScrolled ? 'border-gray-200 hover:border-gray-400' : 'bg-white/30 backdrop-blur-md'
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleMenuToggle}
              className="lg:hidden text-[#050307] hover:opacity-70 transition-opacity duration-300 menu-button"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-500 ease-in-out mobile-menu ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
          style={{
            top: hasScrolled ? '72px' : '96px',
            pointerEvents: isMenuOpen ? 'auto' : 'none',
          }}
        >
          <div className="max-w-7xl mx-auto py-4 px-4">
            {[
              ['Robots', '/robots'],
              ['Actuators', '/actuators'],
              ['Solutions', '/solutions'],
              ['About', '/about'],
              ['Careers', '/careers'],
              ['Media', '/media'],
              ['Contact', '/contact']
            ].map(([title, url]) => (
              <a 
                key={url}
                href={url}
                className="block py-2 text-center text-base font-almirego text-[#050307] hover:opacity-70 transition-opacity duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;