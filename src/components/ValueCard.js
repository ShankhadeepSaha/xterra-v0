import React from 'react';

function ValueCard({value, title }) {
  return (
    <div className='h-full'>
      <div className="flex flex-col h-full rounded-[32px] border border-white p-4 sm:p-6 md:p-8">
        <div className="flex flex-col space-y-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex space-x-2 text-xs sm:text-sm">
            <div className="rounded-full border border-white px-2 sm:px-4 py-1 bg-white text-black font-bold">{value}</div>
          </div>
          <div className="font-poppins font-normal leading-tight text-lg sm:text-xl md:text-2xl lg:text-3xl">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValueCard;