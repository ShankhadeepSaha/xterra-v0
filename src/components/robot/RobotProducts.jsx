import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/img/svanM2IITK.jpeg",
    "/images/img/OutInWild_xTerra.jpeg",
    "/robot/r3.jpeg",
    "/robot/r4.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[680px] lg:h-[720px] xl:h-[780px] 2xl:h-[820px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute w-full h-full transform transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          }}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

function ImageCard({
  bgImage,
  title,
  subtitle,
  description,
  learnMoreLink,
  buyLink,
  titleStyle = {},
  subtitleStyle = {},
  descriptionStyle = {},
  learnMoreStyle = {},
  buyStyle = {},
  showLearnMore = true,
}) {
  return (
    <div
      className={`${bgImage} h-[400px] sm:h-[500px] md:h-[680px] lg:h-[720px] xl:h-[780px] 2xl:h-[820px] w-full bg-cover bg-center`}
    >
      <div className="flex flex-col items-center h-full p-4 pt-8 sm:pt-24 md:pt-32 text-center">
        <div
          className={`text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins mb-2`}
          style={titleStyle}
        >
          {title}
        </div>
        <div
          className={`text-sm sm:text-base md:text-lg font-light mb-1`}
          style={subtitleStyle}
        >
          {subtitle}
        </div>
        <div
          className={`text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-8`}
          style={descriptionStyle}
        >
          {description}
        </div>
        {(showLearnMore || buyLink) && (
          <div className="flex gap-4 mt-auto mb-8">
            {showLearnMore && (
              <a
                href={learnMoreLink}
                className="px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors"
                style={learnMoreStyle}
              >
                Learn more
              </a>
            )}
            {/* {buyLink && (
              <a href={buyLink} className='px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors' style={buyStyle}>
                Buy
              </a>
            )} */}
          </div>
        )}
      </div>
    </div>
  );
}

function RobotProducts() {
  return (
    <div className='flex flex-col w-full'>
      <div className="sm:px-4">
      <ImageCarousel />
      </div>
      <div className='flex flex-col gap-2 sm:gap-3 md:gap-4 py-2 sm:py-3 md:py-4 sm:px-3 md:px-4 w-full'>
        <ImageCard 
          bgImage="bg-[url('/robot/f9.png')]"
          title="SVAN M1"
          subtitle=""
          description="Our first prototype quadruped robot"
          learnMoreLink="/svan-m1"
          buyLink="/buy-svan-m1"
          titleStyle={{ color: 'white' }}
          subtitleStyle={{ color: 'white' }}
          descriptionStyle={{ color: 'white' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
        <ImageCard 
          bgImage="bg-[url('/robot/f7.png')]"
          title="SVAN M2"
          subtitle=""
          description="India's first commercial quadruped robot"
          learnMoreLink="/svan-m2"
          buyLink="/buy-svan-m2"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black' }}
          descriptionStyle={{ color: 'black' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
        <ImageCard 
          bgImage="bg-[url('/robot/s1.png')]"
          title="SVAN S1"
          subtitle="COMING SOON"
          description="Next generation industrial robot"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black'}}
          descriptionStyle={{ color: 'black' }}
          showLearnMore={false}
        />
        <ImageCard 
          bgImage="bg-[url('/robot/f7.png')]"
          title="COBOT C1"
          subtitle=""
          description="Revolutionize Automation with Precision and Efficiency"
          learnMoreLink="/cobot-c1"
          buyLink="/buy-svan-m2"
          titleStyle={{ color: 'black' }}
          subtitleStyle={{ color: 'black' }}
          descriptionStyle={{ color: 'black' }}
          learnMoreStyle={{ backgroundColor: '#4E148C', color: 'white' }}
          buyStyle={{ backgroundColor: 'white', color: '#4E148C' }}
        />
      </div>
    </div>
  )
}

export default RobotProducts;
