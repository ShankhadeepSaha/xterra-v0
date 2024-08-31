import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperPhotoGallery = () => {
  // Sample photo data - replace with your actual photo URLs
  const photos = [
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image1.webp',
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full aspect-square"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img 
              src={photo} 
              alt={`Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPhotoGallery;