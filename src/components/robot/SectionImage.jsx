import React from 'react';

function SectionImage() {
  return (
    <div className="py-4 sm:py-6 md:py-8 px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 bg-[#F5F5F5] flex justify-center md:justify-start items-center">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-almirego">
              Want to choose your perfect drone?
            </h2>
            <p className="text-black font-light font-almirego">
              Take the quiz and find out our perfect match
            </p>
            <button className="rounded-full font-light font-almirego bg-[#0070D5] text-white px-4 py-2 mt-2 hover:bg-[#005bb1] transition-colors">
              Take a quiz
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <img src="/robot/1.jpg" alt="quiz" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default SectionImage;