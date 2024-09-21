import React from 'react';
import { Smile } from 'lucide-react';

const CultureCard = ({ children, extraClasses = '' }) => (
  <div className={`rounded-lg border border-solid flex items-center justify-center text-center p-4 ${extraClasses}`}>
    {children}
  </div>
);

const CultureThatWins = () => {
  return (
    <div className='pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-normal lg:leading-[112%] font-normal font-almirego text-[#050307] mb-8 sm:mb-12">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 text-transform: uppercase">
          <CultureCard extraClasses="lg:row-span-6 lg:col-span-3">
            <div>
              {/* <Smile className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" /> */}
              <p className="w-full sm:w-3/4 lg:w-1/2 font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Move fearlessly with focus</p>
            </div>
          </CultureCard>
          <CultureCard extraClasses="sm:col-span-2 lg:col-span-5 lg:row-span-3 py-4 sm:py-6 lg:py-10">
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Fuelled by passion</p>
          </CultureCard>
          <CultureCard extraClasses='lg:col-span-2 lg:row-span-3'>
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Innovate using AI</p>
          </CultureCard>
          <CultureCard extraClasses='sm:col-span-2 lg:col-span-3 lg:row-span-3 py-4 sm:py-6 lg:py-10'>
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Think by first principles</p>
          </CultureCard>
          <CultureCard extraClasses='lg:col-span-3 lg:row-span-3'>
            <div>
              <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Robust & Dynamic</p>
              {/* <span className="text-xl sm:text-2xl">✨</span> */}
            </div>
          </CultureCard>
          <CultureCard extraClasses='lg:col-span-2 lg:row-span-3'>
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307] transform">Step Ahead Of Wheels</p>
          </CultureCard>
        </div>
      </div>
    </div>
  );
};

export default CultureThatWins;