import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const EMAIL = 'info@xterrarobotics.com';
const NAVIGATION_LINKS = [
  { name: 'Robots', path: '/robots' },
  { name: 'Actuators', path: '/actuators' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
];
const SOCIAL_LINKS = [
  { 
    name: 'Linkedin', 
    url: 'https://www.linkedin.com/company/xterra-robotics/',
    icon: FaLinkedin 
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/xterrarobotics/',
    icon: FaInstagram 
  },
  { 
    name: 'X', 
    url: 'https://twitter.com/xterrarobotics',
    icon: FaXTwitter 
  },
  { 
    name: 'Youtube', 
    url: 'https://www.youtube.com/@xTerraRobotics',
    icon: FaYoutube 
  }
];

export default function Footer() {
  return (
    <footer className='w-full bg-white'>
      <div className='container mx-auto p-4 pb-4 sm:pb-6 md:pb-8 lg:pb-10 flex flex-col justify-between space-y-8 md:space-y-12'>
        <EmailSection />
        <MainContent />
      </div>
    </footer>
  );
}

const EmailSection = () => (
  <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-almirego font-light'>
    <a 
      href={`mailto:${EMAIL}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${EMAIL}`;
      }}
      className="hover:underline cursor-pointer"
      rel="noopener noreferrer"
      aria-label={`Send email to ${EMAIL}`}
    >
      <span className='font-almirego font-light'>{EMAIL}</span>
    </a>
  </div>
);

const MainContent = () => (
  <div className='flex flex-col space-y-8 md:space-y-12 border-t pt-8 md:pt-12'>
    <div className='flex flex-col lg:flex-row lg:space-x-16'>
      <NavigationLinks />
      <CompanyInfo />
    </div>
  </div>
);

const NavigationLinks = () => (
  <div className='flex flex-col space-y-2 md:space-y-4 w-full lg:w-1/2 mb-8 lg:mb-0'>
    {NAVIGATION_LINKS.map(({ name, path }, index) => (
      <Link 
        href={path} 
        key={index}
        className="hover:opacity-80 transition-opacity duration-300"
      >
        <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-almirego font-light cursor-pointer'>
          {name}
        </span>
      </Link>
    ))}
  </div>
);

const CompanyInfo = () => (
  <div className='flex flex-col space-y-6 w-full lg:w-1/2'>
    <Address />
    <SocialLinks />
    <Copyright />
  </div>
);

const Address = () => (
  <>
    <div className='w-full mb-4'>
      <div className='text-lg sm:text-xl md:text-2xl font-almirego font-normal'>xTerra Robotics Pvt Ltd</div>
      <div className='text-base sm:text-base md:text-base font-almirego font-light mt-2'>G-508/11 Avas Vikas No. 1, Panki Road Kalyanpur,</div>
      <div className='text-base font-almirego font-light mt-2'>Avas Vikas Yojna No. 3, Kanpur Nagar,</div>
      <div className='text-base font-almirego font-light mt-2'>Kanpur, Uttar Pradesh, 208017</div>
      <div className='text-base font-sans font-light mt-2'>Shipping Address:</div>
      <div className='text-base sm:text-base md:text-base font-almirego font-light mt-2'>NL 212, Mobile Robotics Lab,</div>
      <div className='text-base font-almirego font-light mt-2'>Department of Mechanical Engineering,</div>
      <div className='text-base font-almirego font-light mt-2'>IIT Kanpur, Kanpur, 208016</div>
    </div>
  </>
);

const SocialLinks = () => (
  <div className='flex flex-wrap gap-6'>
    {SOCIAL_LINKS.map(({ name, url, icon: Icon }, index) => (
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity duration-300"
        aria-label={`Visit our ${name} page`}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </a>
    ))}
  </div>
);

const Copyright = () => (
  <div className='text-base sm:text-lg md:text-xl font-almirego font-normal'>
    © {new Date().getFullYear()} xTerra Robotics. All rights reserved.
  </div>
);