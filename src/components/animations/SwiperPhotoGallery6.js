import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperPhotoGallery = () => {
  const photos = [
    'images/revolvingSlider/image1.webp',
    'images/revolvingSlider/image2.webp',
    'images/revolvingSlider/image3.webp',
    'images/revolvingSlider/image4.webp',
    'images/revolvingSlider/image5.webp',
    'images/revolvingSlider/image6.webp',
    'images/revolvingSlider/image7.webp',
    'images/revolvingSlider/image7.webp',
    'images/revolvingSlider/image7.webp',
    'images/revolvingSlider/image7.webp',
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden">
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
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper w-full max-w-7xl"
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
    </div>
  );
};

export default SwiperPhotoGallery;