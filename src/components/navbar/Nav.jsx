import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 50);
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
          hasScrolled ? 'top-0' : 'top-10'
        } ${!isVisible && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className={`w-full transition-all duration-500 ease-in-out ${
          hasScrolled && !isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
          <div className={`max-w-7xl mx-auto flex items-center justify-between px-4 transition-all duration-500 ease-in-out ${
            hasScrolled ? 'py-4' : 'py-2'
          }`}>
            <a href="/" className="ps-4 lg:ps-12 flex items-center">
              <img src="/images/logo.svg" alt="xterra" className="w-8 lg:w-12" />
              <span className={`text-lg lg:text-xl font-bold font-poppins transition-colors duration-300 ${
                isMenuOpen || hasScrolled ? 'text-[#4E148C]' : 'text-gray-50'
              }`}>
                XTERRA
              </span>
            </a>
            
            {/* Desktop Menu */}
            <div className={`hidden lg:flex py-2 rounded-xl w-1/2 items-center justify-center space-x-4 transition-all duration-500 ease-in-out ${
              hasScrolled ? '' : 'bg-white/50 backdrop-blur-md'
            }`}>
              <a href="/robots" className="w-1/5 text-center text-base font-poppins text-[#050307] hover:opacity-70 transition-opacity duration-300">Robots</a>
              <a href="/actuators" className="w-1/5 text-center text-base font-poppins text-[#050307] hover:opacity-70 transition-opacity duration-300">Actuators</a>
              <a href="/solutions" className="w-1/5 text-center text-base font-poppins text-[#050307] hover:opacity-70 transition-opacity duration-300">Solutions</a>
              <a href="/about" className="w-1/5 text-center text-base font-poppins text-[#050307] hover:opacity-70 transition-opacity duration-300">About</a>
              <a href="/careers" className="w-1/5 text-center text-base font-poppins text-[#050307] hover:opacity-70 transition-opacity duration-300">Careers</a>
            </div>
            
            <div className="hidden lg:flex pe-4 lg:pe-12 justify-end space-x-2">
              <a 
                href="/media" 
                className={`text-[#050307] font-poppins px-4 lg:px-6 py-2 border rounded-full text-sm lg:text-base hover:scale-105 transition-all duration-300 ease-in-out ${
                  hasScrolled ? 'border-gray-200 hover:border-gray-400' : 'bg-white/50 backdrop-blur-md'
                }`}
              >
                Media
              </a>
              <a 
                href="/contact" 
                className={`text-[#050307] font-poppins px-4 lg:px-6 py-2 border rounded-full text-sm lg:text-base hover:scale-105 transition-all duration-300 ease-in-out ${
                  hasScrolled ? 'border-gray-200 hover:border-gray-400' : 'bg-white/50 backdrop-blur-md'
                }`}
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleMenuToggle}
              className="lg:hidden text-[#050307] hover:opacity-70 transition-opacity duration-300 menu-button z-50 relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-50 z-40 lg:hidden">
          <div className="flex flex-col items-center justify-center h-full">
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
                className="text-2xl font-poppins text-[#050307] hover:text-[#4E148C] transition-colors duration-300 my-4"
                onClick={handleMenuToggle}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;