"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useSwipeable } from 'react-swipeable';
import "@/app/Carousel.css";

const CarouselComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const carouselItems = [
    {
      id: 1,
      image: "/carousel/1a.jpg",
      altText: "Image 1",
    },
    {
      id: 2,
      image: "/carousel/1b.jpg",
      altText: "Image 2",
    },
    {
      id: 3,
      image: "/carousel/1c.jpg",
      altText: "Image 3",
    },
    {
      id: 4,
      image: "/carousel/1d.jpg",
      altText: "Image 4",
    },
    {
      id: 5,
      image: "/carousel/1e.jpg",
      altText: "Image 5",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      eventData.event.preventDefault();
      handleNext();
    },
    onSwipedRight: (eventData) => {
      eventData.event.preventDefault();
      handlePrev();
    },
    trackMouse: true
  });

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [activeIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, []);


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
    <div className="carousel-container" {...handlers} style={{height: `${imageHeight}px`}}>
      <div
        className="carousel-wrapper"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {carouselItems.map((item, index) => (
          <div className="carousel-item" key={item.id}>
            <Image unoptimized ref={index === activeIndex ? imageRef : null} height={100} width={100} src={item.image} alt={item.altText} className="carousel-image" onLoad={() => {  if (imageRef.current) { setImageHeight(imageRef.current.clientHeight); } }} />
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
    </div>
  );
};

export default CarouselComponent;