"use client";
import Image from "next/image";
import React from "react";

function OurParner() {
  const parner = [
    {
      img: "/img/partner/avg.png",
      alt: "avg",
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
      img: "/img/partner/fujifilm.png",
      alt: "sony",
    },
    {
      img: "/img/partner/kpmg.png",
      alt: "kpmg",
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
      img: "/img/partner/daikin.png",
      alt: "daikin",
    },
  ];
  return (
    <div className="px-16 py-20 mx-auto max-w-7xl my-10 flex justify-between items-center">
      <div>
        <div className="text-4xl font-bold text-[#0E4F94]">Our Partner</div>
        <p className="mt-7 max-w-2xl">
          These companies, with their respective expertise and strengths, come
          together to create better experiences and more innovative solutions
          for you and bring unique aspects and experiences that complement our
          vision and mission.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 items-center">
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
