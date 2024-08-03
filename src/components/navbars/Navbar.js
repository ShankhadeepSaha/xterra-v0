import React from 'react';
import '@/app/globals.css'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white px-8 py-2">
      <div className="flex items-center">
        <img src="https://cdn.prod.website-files.com/65a638f247db1ce7c092cd57/65b3bee77908e5d4d4a8e306_logo-web-nav-def-svg.svg" alt="Hyperlab" className="text-black h-12 w-auto" />
        {/* <span className="text-black ml-2 text-xl font-bold">Hyperlab</span> */}
      </div>
      <div className="flex align-middle space-x-16">
        <a href="#sports" className="text-black text-sm hover:text-gray-900">SPORTS</a>
        <a href="#gym" className="text-black text-sm hover:text-gray-900">GYM</a>
        <a href="#about" className="text-black text-sm hover:text-gray-900">ABOUT US</a>
        <a href="#contact" className="text-black text-sm hover:text-gray-900">CONTACT US</a>
      </div>
      <button className="bg-red-600 text-white px-8 py-2 rounded-full font-bold hover:bg-red-700">
        GET HELIOS
      </button>
    </nav>
  );
};

export default Navbar;