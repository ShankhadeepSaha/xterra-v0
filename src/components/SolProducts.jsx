import React from "react";
import Image from "next/image";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 font-poppins">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-light text-[#050307] leading-tight">
            Discover how our solutions are shaping the future of industries.
          </h2>
        </div>
      </div>
    </>
  );
}

// Rest of the code remains the same...

function UseCases() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-poppins">
      <div className="space-y-16 sm:space-y-24 md:space-y-32">
        <UseCase
          title="Thermal Power Plant Inspection"
          description="Our Svan M2 robot enhances power plant safety and efficiency with high-definition cameras, thermal sensors, and AI analytics. It navigates complex areas, inspecting control panels, pipes, and machinery for wear, leaks, and overheating, enabling predictive maintenance and reducing downtime."
          imageSrc="/images/Thermal.png"
          imageAlt="Construction site progress monitoring"
          reverse={true}
        />
        <UseCase
          title="Power Station Inspection"
          description="The Svan M2 revolutionizes power station inspections with its high-definition cameras, thermal imaging, and AI algorithms. It efficiently examines panels, transformers, and hard-to-reach areas, identifying issues early to improve safety and minimize operational disruptions."
          imageSrc="/images/Power.png"
          imageAlt="Construction site assessment"
          reverse={false}
        />
        <UseCase
          title="Construction Survey"
          description="For construction, the Svan M2 provides precise site surveys with HD cameras, LIDAR, and AI. It navigates rugged terrain, performing 3D mapping and capturing accurate measurements, enhancing safety, efficiency, and cost savings in project planning."
          imageSrc="/images/Construction.png"
          imageAlt="Construction site progress monitoring"
          reverse={true}
        />
        <UseCase
          title="Public Security"
          description="Our Svan M2 robot redefines public security by patrolling public spaces, detecting threats, and analyzing behavior patterns with HD cameras, thermal sensors, and AI. It ensures reliable monitoring and swift response, enhancing safety in complex environments."
          imageSrc="/images/Public.png"
          imageAlt="Construction site assessment"
          reverse={false}
        />
      </div>
    </div>
  );
}

function UseCase({ title, description, imageSrc, imageAlt, reverse }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}>
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#050307]">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-[#050307] leading-relaxed">
          {description}
        </p>
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