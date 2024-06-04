"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

interface Feedback {
    id: number;
    name: string;
    thumbnail: string;
    message: string;
}

const feedbacks: Feedback[] = [
  {
    id: 1,
    name: 'Technical Expert',
    thumbnail: '/image1.png',
    message: 'Elevate your experience with precision engineering and exceptional design.',
  },
  {
    id: 2,
    name: 'Innovation Specialist',
    thumbnail: '/image2.jpg',
    message: 'Rising above the rest, our lifts combine tradition with modern innovation.',
  },
  {
    id: 3,
    name: 'Quality Assurance',
    thumbnail: '/image3.jpg',
    message: 'Experience seamless movement with our state-of-the-art lift solutions.',
  },
];

const LandingCarousel: React.FC = () => {
  return (
    <div className="hero-1-bg bg-light flex align-items-center  m-auto h-[100vh]">
      <Swiper
        loop={true}
        slidesPerView="auto"
        spaceBetween={30}
        speed={2000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.client-swiper-button-next',
          prevEl: '.client-swiper-button-prev',
        }}
        modules={[Autoplay, Navigation]}
      >
        {feedbacks.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div 
              className="h-[100%] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${feedback.thumbnail})` }}
            >
              <div className="p-[20px] bg-opacity-50 bg-black w-full h-full flex flex-col justify-center items-center">
                <h5 className="text-5xl font-[700] text-white text-center mb-8 sm:text-2xl">{feedback.name}</h5>
                <p className="font-normal text-center text-white leading-5 text-1x1">{feedback.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingCarousel;
