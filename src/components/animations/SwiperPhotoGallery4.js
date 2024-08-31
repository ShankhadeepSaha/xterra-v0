import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperPhotoGallery = () => {
  // Sample photo data - replace with your actual photo URLs
  const photos = [
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image2.webp',
    'images/revolvingSlider/image3.webp',
    'images/revolvingSlider/image4.webp',
    'images/revolvingSlider/image5.webp',
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="bg-center bg-cover w-80 h-80">
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