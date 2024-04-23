import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import ModalVideo from "@/components/modal/ModalVideo";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    key: 1,
    src: "/img/project/video/Yt1.png",
    link: "https://www.youtube.com/embed/blXNITtzSjM",
  },
  {
    key: 2,
    src: "/img/project/video/Yt2.png",
    link: "https://www.youtube.com/embed/i9hKwHR4Mx0",
  },
  {
    key: 3,
    src: "/img/project/video/Yt3.png",
    link: "https://www.youtube.com/embed/R-O6PHVEHBo",
  },
  {
    key: 4,
    src: "/img/project/video/Yt4.png",
    link: "https://www.youtube.com/embed/sTeyKG8nsjs",
  },

  {
    key: 5,
    src: "/img/project/video/Yt5.png",
    link: "https://www.youtube.com/embed/O25XOOdO91E",
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
          <div className="absolute top-0 bottom-0 left-0 right-0">
            <div className="flex items-center justify-center h-full">
              <button className="hover:scale-110">
                <ModalVideo videoUrl={slide.link}>
                  <svg
                    width="40"
                    height="36"
                    viewBox="0 0 40 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="19.2477"
                      cy="18.1152"
                      rx="17.2443"
                      ry="17.3618"
                      fill="white"
                    />
                    <path
                      d="M25.6092 15.9306L22.4008 13.0804L17.1729 8.4361C16.0655 7.46673 14.1763 8.1612 14.1763 9.55014V18.5638V26.6804C14.1763 28.0694 16.0655 28.7639 17.1729 27.78L25.6092 20.2855C26.961 19.0991 26.961 17.1315 25.6092 15.9306Z"
                      fill="#0E4F94"
                    />
                  </svg>
                </ModalVideo>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
