"use client";
import React, { useState } from "react";
import "@/app/Carousel.css";
import Image from "next/image";

const Carousel = () => {
  const [currentSlide] = useState(1);
  const [images, setImages] = useState([
    "/foto1.png",
    "/foto2.png",
    "/foto3.png"
  ]);

  const handleImageClick = (index: number) => {
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
  };

  return (
    <div>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex items-center ${index === 0 ? "" : "ml-3"}`}
            onClick={() => handleImageClick(index)}
            style={{ cursor: "pointer" }} // Add cursor pointer style
          >
            <Image
              unoptimized
              width={100}
              height={100}
              src={image}
              alt={`Slide ${index}`}
              className={`${index === currentSlide ? "w-96" : "w-72"}`}
              style={{ opacity: index === 0 || index === 2 ? 0.5 : 1 }} // Set opacity to 0.5 for index 0 and 2
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
