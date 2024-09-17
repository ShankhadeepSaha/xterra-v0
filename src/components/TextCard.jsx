import React from 'react';

function TextCard({ text, bgColor }) {
  return (
    <div className={`w-full sm:w-1/2 lg:w-1/4 text-[#050307] ${bgColor} rounded-[32px] p-6 sm:p-8 lg:p-10 m-2 sm:m-3 lg:m-4`}>
      <div className="flex flex-col justify-center h-full">
        <div className="font-almirego font-light text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-tight">
          {text}
        </div>
      </div>
    </div>
  );
}

export default TextCard;