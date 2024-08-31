import React from 'react';

const MaskedText = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-12">
      <div 
        className="bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 font-almirego font-bold text-center sm:text-left"
        style={{
          backgroundImage: "url('images/maskImage.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        We're a global powerhouse of creativity
        and innovation. We work with the best
        brands in the biz, and we're not afraid to
        shake things up with our daring and
        unconventional designs.
      </div>
    </div>
  );
};

export default MaskedText;