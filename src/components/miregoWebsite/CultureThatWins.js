import React from 'react';

const CultureCard = ({ children, extraClasses = '' }) => (
  <div className={`rounded-lg border border-solid flex items-center justify-center text-center p-4 ${extraClasses}`}>
    {children}
  </div>
);

const CultureThatWins = () => {
  return (
    <div className='pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
      <div className='max-w-7xl mx-auto'>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal font-almirego text-[#050307] mb-8 sm:mb-12">Our Mission</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-4 text-transform: uppercase">
          <CultureCard extraClasses="md:col-span-2 lg:col-span-3 lg:row-span-2">
            <div>
              <p className="w-full sm:w-3/4 md:w-full lg:w-3/4 font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Move fearlessly with focus</p>
            </div>
          </CultureCard>
          <CultureCard extraClasses="sm:col-span-2 md:col-span-2 lg:col-span-5 lg:row-span-1 py-4 sm:py-6 lg:py-10">
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Fuelled by passion</p>
          </CultureCard>
          <CultureCard extraClasses='md:col-span-2 lg:col-span-4 lg:row-span-1'>
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Innovate using AI</p>
          </CultureCard>
          <CultureCard extraClasses='sm:col-span-2 md:col-span-4 lg:col-span-9 lg:row-span-1 py-4 sm:py-6 lg:py-10'>
            <p className="font-normal font-almirego text-sm sm:text-base lg:text-lg text-[#050307]">Think by first principles</p>
          </CultureCard>
        </div>
      </div>
    </div>
  );
};

export default CultureThatWins;