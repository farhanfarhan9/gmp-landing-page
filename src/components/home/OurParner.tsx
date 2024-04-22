import Image from "next/image";
import React from "react";

function OurParner() {
  const parner = [
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
    {
      img: "/img/partner/sony.png",
      alt: "sony",
    },
  ];
  return (
    <div className="p-10 mx-auto max-w-7xl my-10 flex justify-between">
      <div>
        <div className="text-4xl font-bold text-[#0E4F94]">
          Our Partner & Client
        </div>
        <p className="mt-7 max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          molestie turpis vel erat malesuada, nec hendrerit ligula accumsan.
          Curabitur non nibh consectetur, maximus sapien non, bibendum nibh.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {parner.map((item, index) => (
          <Image
            key={index}
            src={item.img}
            alt={item.alt}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}

export default OurParner;
