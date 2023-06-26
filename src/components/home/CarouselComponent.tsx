"use client";
import React, { useState } from "react";
import "@/app/Carousel.css";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([
    { image: "/foto1.png", active: false },
    { image: "/foto2.png", active: true },
    { image: "/foto3.png", active: false },
  ]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleImageClick = (index: number) => {
    setImages((prevImages) =>
      prevImages.map((image, i) => {
        return { ...image, active: false };
      })
    );

    setImages(prevImages => {
      if (index === 0) {
        const reorderedImages = [...prevImages];
        const clickedImage = reorderedImages.splice(2, 1)[0];
        reorderedImages.splice(0, 0, clickedImage);
        return reorderedImages;
      } else if (index === 2) {
        const reorderedImages = [...prevImages];
        const clickedImage = reorderedImages.splice(0, 1)[0];
        reorderedImages.splice(2, 0, clickedImage);
        return reorderedImages;
      } else {
        return prevImages;
      }
    });

    setTimeout(() => {
      setImages((prevImages) =>
        prevImages.map((image, index) => {
          return { ...image, active: index === 1 ? true : false };
        })
      );
    }, 500); // 2000 milliseconds delay (2 seconds)
  };

  return (
    <div className="carousel">
      {/* <button className="prev-button" onClick={previousSlide}>
        <span className="arrow">&#8592;</span>
      </button> */}
      <div className="slider-container">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              className={`slide${image.active ? ' active' : ''} cursor-pointer`}
              src={image.image}
              alt={`Slide ${index}`}
              onClick={() => handleImageClick(index)}
            />
          );
        })}
      </div>
      {/* <button className="next-button" onClick={nextSlide}>
        <span className="arrow">&#8594;</span>
      </button> */}
    </div>
  );
}

export default Carousel;
