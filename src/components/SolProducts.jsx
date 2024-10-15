import React from "react";
import Image from "next/image";
import WordReveal from "./animations/WordReveal";

function VideoHero() {
  return (
    <>
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/m2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-almirego">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <WordReveal
            text="Are you passionate about robotics and eager to be part of a dynamic team shaping the future of technology?"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-light text-[#050307] leading-tight"
          />
        </div>
      </div>
    </>
  );
}

function UseCases() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-almirego">
      <div className="space-y-16 sm:space-y-24 md:space-y-32">
        <UseCase
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imageSrc="/robot/4x6.png"
          imageAlt="Construction site progress monitoring"
          pdfUrl="/path-to-your-pdf/site-assessment.pdf"
          reverse={true}
        />
        <UseCase
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imageSrc="/robot/4x6.png"
          imageAlt="Construction site assessment"
          pdfUrl="/path-to-your-pdf/site-assessment.pdf"
          reverse={false}
        />
        <UseCase
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imageSrc="/robot/4x6.png"
          imageAlt="Construction site progress monitoring"
          pdfUrl="/path-to-your-pdf/site-assessment.pdf"
          reverse={true}
        />
        <UseCase
          title="Lorem Ipsum"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          imageSrc="/robot/4x6.png"
          imageAlt="Construction site assessment"
          pdfUrl="/path-to-your-pdf/site-assessment.pdf"
          reverse={false}
        />
        
      </div>
    </div>
  );
}

function UseCase({ title, description, imageSrc, imageAlt, pdfUrl, reverse }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#050307]">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed">
          {description}
        </p>
        <button 
          onClick={handleDownload}
          className="mt-4 px-6 py-2 bg-[#4E148C] text-white rounded-full text-sm sm:text-base font-semibold hover:bg-[#3a0f69] transition-colors duration-300"
        >
          Know More
        </button>
      </div>
      <div className="md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}

function SolProducts() {
  return (
    <div className="flex flex-col w-full">
      <div className="sm:px-4">
        <VideoHero />
      </div>
      <UseCases />
    </div>
  );
}

export default SolProducts;