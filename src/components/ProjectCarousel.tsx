import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const slides = [
  {
    key: 1,
    src: "/img/project/video/Yt1.png",
  },
  {
    key: 2,
    src: "/img/project/video/Yt2.png",
  },
  {
    key: 3,
    src: "/img/project/video/Yt3.png",
  },
  {
    key: 4,
    src: "/img/project/video/Yt4.png",
  },

  {
    key: 5,
    src: "/img/project/video/Yt5.png",
  },
];

export default function ProjectCarousel() {
  const middleIndex = Math.floor(slides.length / 2); // Calculate the index of the middle slide
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      initialSlide={middleIndex} // Set initial slide to the middle
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.key}>
          <Image
            src={slide.src}
            alt="Carousel picture"
            width={150}
            height={150}
            className="rounded-md shadow-md"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
