import React from 'react';
import Link from 'next/link';
import BlinkingText from '@/components/animations/BlinkingText';

const EMAIL = 'info@xterrarobotics.com';
const NAVIGATION_LINKS = [
  { name: 'Robots', path: '/robots' },
  { name: 'Actuators', path: '/actuators' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' }
];
const SOCIAL_LINKS = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/company/xterra-robotics/' },
  { name: 'Instagram', url: 'https://www.instagram.com/xterrarobotics/' },
  { name: 'X', url: 'https://twitter.com/xterrarobotics' },
  { name: 'Youtube', url: 'https://www.youtube.com/@xTerraRobotics' }
];

export default function Footer() {
  return (
    <footer className='w-full bg-white'>
      <div className='container mx-auto p-4 pb-8 sm:pb-12 md:pb-16 lg:pb-20 flex flex-col justify-between space-y-8 md:space-y-12'>
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
      <BlinkingText text={EMAIL} className='font-almirego font-light' />
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
        <BlinkingText 
          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-almirego font-light cursor-pointer' 
          text={name} 
        />
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
  <div className='w-full mb-4'>
    <div className='text-lg sm:text-xl md:text-2xl font-almirego font-normal'>xTerra Robotics</div>
    <div className='text-base sm:text-lg md:text-xl font-almirego font-light mt-2'>G-508/11, Avas Vikas No. 1,</div>
    <div className='text-base sm:text-lg md:text-xl font-almirego font-light mt-2'>Kalyanpur, Kanpur-208017</div>
  </div>
);

const SocialLinks = () => (
  <div className='flex flex-wrap gap-4'>
    {SOCIAL_LINKS.map(({ name, url }, index) => (
      <a
        key={index}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        aria-label={`Visit our ${name} page`}
      >
        <BlinkingText 
          className='text-base sm:text-lg md:text-xl font-almirego font-normal'
          text={name}
          icon={true}
        />
      </a>
    ))}
  </div>
);

const Copyright = () => (
  <div className='text-base sm:text-lg md:text-xl font-almirego font-normal'>
    © {new Date().getFullYear()} xTerra Robotics. All rights reserved.
  </div>
);