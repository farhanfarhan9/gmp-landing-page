"use client";
import React, { useState } from "react";
import "@/app/Carousel.css"; // Import file CSS untuk gaya carousel

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      id: 1,
      image: "/foto1.png",
      altText: "Image 1",
    },
    {
      id: 2,
      image: "/foto2.png",
      altText: "Image 2",
    },
    {
      id: 3,
      image: "/foto3.png",
      altText: "Image 3",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return carouselItems.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      if (prevIndex === carouselItems.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div className="carousel-item" key={item.id}>
            <img src={item.image} alt={item.altText} className="carousel-image" />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <div
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
      <button className="carousel-button prev bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer" onClick={handlePrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.0295 20.0494C10.8889 20.1898 10.6983 20.2687 10.4995 20.2687C10.3008 20.2687 10.1101 20.1898 9.96951 20.0494L2.46951 12.5494C2.32906 12.4088 2.25017 12.2181 2.25017 12.0194C2.25017 11.8206 2.32906 11.63 2.46951 11.4894L9.96951 3.9894C10.0382 3.91571 10.121 3.85661 10.213 3.81562C10.305 3.77462 10.4043 3.75258 10.505 3.75081C10.6057 3.74903 10.7057 3.76755 10.7991 3.80527C10.8925 3.843 10.9773 3.89914 11.0485 3.97036C11.1198 4.04158 11.1759 4.12641 11.2136 4.2198C11.2514 4.31319 11.2699 4.41322 11.2681 4.51392C11.2663 4.61462 11.2443 4.71394 11.2033 4.80594C11.1623 4.89794 11.1032 4.98074 11.0295 5.0494L4.80951 11.2694L20.9995 11.2694C21.1984 11.2694 21.3892 11.3484 21.5298 11.4891C21.6705 11.6297 21.7495 11.8205 21.7495 12.0194C21.7495 12.2183 21.6705 12.4091 21.5298 12.5497C21.3892 12.6904 21.1984 12.7694 20.9995 12.7694L4.80951 12.7694L11.0295 18.9894C11.17 19.13 11.2489 19.3206 11.2489 19.5194C11.2489 19.7181 11.17 19.9088 11.0295 20.0494Z" fill="black" />
        </svg>
      </button>
      <button className="carousel-button next bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer" onClick={handleNext}>
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.97 0.970011C11.1106 0.829561 11.3012 0.750671 11.5 0.750671C11.6988 0.750671 11.8894 0.829561 12.03 0.970011L19.53 8.47001C19.6705 8.61064 19.7493 8.80126 19.7493 9.00001C19.7493 9.19876 19.6705 9.38939 19.53 9.53001L12.03 17.03C11.9613 17.1037 11.8785 17.1628 11.7865 17.2038C11.6945 17.2448 11.5952 17.2668 11.4945 17.2686C11.3938 17.2704 11.2938 17.2519 11.2004 17.2141C11.107 17.1764 11.0222 17.1203 10.951 17.049C10.8797 16.9778 10.8236 16.893 10.7859 16.7996C10.7482 16.7062 10.7296 16.6062 10.7314 16.5055C10.7332 16.4048 10.7552 16.3055 10.7962 16.2135C10.8372 16.1215 10.8963 16.0387 10.97 15.97L17.19 9.75001H1C0.801088 9.75001 0.610322 9.67099 0.46967 9.53034C0.329018 9.38969 0.25 9.19892 0.25 9.00001C0.25 8.8011 0.329018 8.61033 0.46967 8.46968C0.610322 8.32903 0.801088 8.25001 1 8.25001H17.19L10.97 2.03001C10.8295 1.88939 10.7507 1.69876 10.7507 1.50001C10.7507 1.30126 10.8295 1.11064 10.97 0.970011Z" fill="black" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselComponent;