import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const SwiperPhotoGallery = () => {
  const swiperRef = useRef(null);
  const photos = [
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image2.webp',
    'images/revolvingSlider/image3.webp',
    'images/revolvingSlider/image4.webp',
    'images/revolvingSlider/image5.webp',
    'images/revolvingSlider/image6.webp',
    'images/revolvingSlider/image7.webp',
    'images/revolvingSlider/image8.webp',
    'images/revolvingSlider/image9.webp',
    'images/revolvingSlider/image10.webp',
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper w-full max-w-7xl"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="bg-transparent">
            <div className="relative transform transition-all duration-500 hover:scale-110">
              <img 
                src={photo} 
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-white text-2xl font-bold">Image {index + 1}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SwiperPhotoGallery;