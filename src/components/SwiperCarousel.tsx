"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { useRef } from "react";

const slides = [
  {
    key: 1,
    src: "/carousel/1e.jpg",
  },
  {
    key: 2,
    src: "/carousel/1c.jpg",
  },
  {
    key: 3,
    src: "/carousel/1b.jpg",
  },
  {
    key: 4,
    src: "/carousel/1d.jpg",
  },

  {
    key: 5,
    src: "/carousel/1f.jpg",
  },
  {
    key: 6,
    src: "/carousel/1g.jpg",
  },
  {
    key: 7,
    src: "/carousel/1h.jpg",
  },
];

export default function SwiperCarousel() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      initialSlide={0}
      centeredSlides={true}
      slidesPerView={2}
      slideToClickedSlide
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      }}
      height={20}
      loop={true}
      pagination={false}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onAfterInit={(swiper) => {
        const swiperWraps = document.querySelectorAll(".swiper-item");

        swiperWraps.forEach((element) => {
          element.classList.remove("hidden");
        });
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.key}>
          <div className="swiper-item hidden">
            <Image
              src={slide.src}
              alt="Carouse picture"
              width={300}
              height={300}
              className="rounded-md shadow-md"
            />
          </div>
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
