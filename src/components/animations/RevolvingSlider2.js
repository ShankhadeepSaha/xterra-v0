import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// You'll need to import the CSS for react-slick and its default theme
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

const CircularCarouselSlider = () => {
  const images = [
    '/images/revolvingSlider/image1.png',
    '/images/revolvingSlider/image2.png',
    '/images/revolvingSlider/image3.png',
    '/images/revolvingSlider/image4.png',
    '/images/revolvingSlider/image5.png',
    '/images/revolvingSlider/image6.png',
    '/images/revolvingSlider/image7.png',
    '/images/revolvingSlider/image8.png',
    '/images/revolvingSlider/image9.png',
    '/images/revolvingSlider/image10.png',
  ];

  const CustomPrevofArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
    >
      <ChevronLeft className="w-6 h-6 text-gray-800" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
    >
      <ChevronRight className="w-6 h-6 text-gray-800" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    prevArrow: <CustomPrevofArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img 
              src={src} 
              alt={`Image ${index + 1}`} 
              className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CircularCarouselSlider;