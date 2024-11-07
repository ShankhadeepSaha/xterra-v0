import React from 'react';

function TextCard({ text, bgColor }) {
  return (
    <div className={`w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] ${bgColor} rounded-[32px] p-6 flex-grow`}>
      <div className="flex flex-col justify-center h-full">
        <div className="font-poppins font-light text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-tight text-[#050307]">
          {text}
        </div>
      </div>
    </div>
  );
}

export default TextCard;