"use client";
import Image from "next/image";
import React from "react";

function OurParner() {
  const parner = [
    {
      img: "/img/partner/aquahelix_logo 1.png",
      alt: "avg",
    },
    {
      img: "/img/partner/teco_logo 1.png",
      alt: "sony",
    },
    {
      img: "/img/partner/tranmax 1.png",
      alt: "sony",
    },
    {
      img: "/img/partner/tsurumi.png",
      alt: "sony",
    },
    {
      img: "/img/partner/Cakoeda.png",
      alt: "sony",
    },
    {
      img: "/img/partner/speck 1.png",
      alt: "kpmg",
    },
    {
      img: "/img/partner/abb 1.png",
      alt: "sony",
    },
    {
      img: "/img/partner/hydracell 1.png",
      alt: "sony",
    },
    {
      img: "/img/partner/APP Kenji.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/image 40.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/pentair (1).png",
      alt: "daikin",
    },
    {
      img: "/img/partner/metering.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/futsu.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/Ki-deb.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/elektrim.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/Yuema logo 1.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/toshirama.png",
      alt: "daikin",
    },
    {
      img: "/img/partner/ebara.png",
      alt: "daikin",
    },
  ];
  return (
    <div className="px-16 py-20 mx-auto max-w-7xl my-10 flex justify-between">
      <div>
        <div className="text-4xl font-bold text-[#0E4F94]">Our Partner</div>
        <p className="mt-7 max-w-2xl">
          These companies, with their respective expertise and strengths, come
          together to create better experiences and more innovative solutions
          for you and bring unique aspects and experiences that complement our
          vision and mission.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-10 items-center">
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
