"use client";
import React, { useState } from "react";
import "@/app/Carousel.css";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "/foto1.png",
    "/foto2.png",
    "/foto3.png",
    // ... daftar gambar lainnya
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={previousSlide}>
        <span className="arrow">&#8592;</span>
      </button>
      <div className="slider-container">
        {images.map((image, index) => {
          let position = index - currentSlide;
          if (position < 0) {
            position += images.length;
          }
          if (position > images.length / 2) {
            position -= images.length;
          }
          const style = {
            transform: `translateX(${position * 100}%) scale(${position === 0 ? 1.2 : 0.8})`,
            opacity: position === 0 ? 1 : 0.5,
          };
          return (
            <img
              key={index}
              className={`slide${position === 0 ? ' active' : ''}`}
              src={image}
              alt={`Slide ${index}`}
            />
          );
        })}
      </div>
      <button className="next-button" onClick={nextSlide}>
        <span className="arrow">&#8594;</span>
      </button>
    </div>
  );
}

export default Carousel;
