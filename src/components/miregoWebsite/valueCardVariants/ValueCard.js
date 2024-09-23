import React from 'react';

function ValueCard({value, number, title }) {
  return (
    <div className='h-full'>
      <div className="flex flex-col h-full rounded-[32px] border border-white p-4 sm:p-6 md:p-8">
        <div className="flex flex-col space-y-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex space-x-2 text-xs sm:text-sm">
            <div className="rounded-full border border-white px-2 sm:px-4 py-1">{value}</div>
            <div className="rounded-xl border border-white px-1 sm:px-2 py-1">{number.padStart(2, '0')}</div>
          </div>
          <div className="font-almirego font-normal leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueCard;