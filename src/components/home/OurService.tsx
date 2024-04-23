"use client";

import Image from "next/image";
import { useState } from "react";

const serviceData = [
  {
    img: "/img/home/service1.png",
    alt: "waste",
    title: "Waste Technology & Environment",
    desc: (
      <div>
        Satria Nusa Engineering is a national wastewater management company that
        has successfully implemented the latest technology in water and
        wastewater technology.
      </div>
    ),
  },
  {
    img: "/img/home/service2.png",
    alt: "waste",
    title: "Civil & Fabrication",
    desc: (
      <div>
        Satria Nusa Engineering has internal capabilities for civil and
        mechanical construction. With more than 10 years of experience, Satria
        Nusa has been involved in various constructions for industrial purposes
        throughout Indonesia.
      </div>
    ),
  },
  {
    img: "/img/home/service3.png",
    alt: "waste",
    title: "Mechanical & Electrical",
    desc: (
      <div>
        Satria Nusa Enjinering through Satria Guna Elektrik, also a panel maker
        for integrated solutions.
      </div>
    ),
  },
  {
    img: "/img/home/service4.png",
    alt: "waste",
    title: "Environmental Permitting",
    desc: (
      <ul className="list-disc ml-8">
        <li>AMDAL & UKL-UPL</li>
        <li>DELH & DPLH</li>
        <li>PERSETUJUAN TEKNIS (Air Limbah, Emisi, LB3)</li>
        <li>PROPER</li>
      </ul>
    ),
  },
];

function OurService() {
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-10 mt-10">
      <div className="text-5xl font-bold text-[#0E4F94] text-center">
        Our Services
      </div>
      <p className="text-center mx-auto w-[880px] mt-7">
        Satria Nusa Engineering is committed to supporting industrial growth by
        maintaining environmental balance. With electro-mechanical, civil &
        chemical engineering experience, we provide a perfect level of success
        to our clients in terms of managing production wastewater (wastewater
        treatment) & domestic wastewater (sewage treatment).
      </p>
      <div className="flex justify-center py-3 text-3xl mt-7 mx-auto max-w-7xl">
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 0 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 0 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(0)}
        >
          Waste Technology <br />& Environment
        </div>
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 1 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 1 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(1)}
        >
          Civil & <br /> Fabrication
        </div>
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 2 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 2 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(2)}
        >
          Mechanical & <br /> Electrical
        </div>
        <div
          className={`text-center pb-5 border-b-4 px-14 cursor-pointer ${
            activeservice === 3 && "font-bold text-[#0E4F94]"
          } ${activeservice >= 3 && "border-[#0E4F94]"}`}
          onClick={() => setactiveservice(3)}
        >
          Environmental <br /> Permitting
        </div>
      </div>

      {serviceData[activeservice] && (
        <div className="mx-auto w-[880px] flex gap-12 justify-between items-center mt-12">
          <div className="w-1/3 rounded-3xl overflow-hidden">
            <Image
              src={serviceData[activeservice].img}
              alt={serviceData[activeservice].alt}
              width={600}
              height={600}
            />
          </div>
          <div className="w-2/3">
            <div className="text-3xl text-[#0E4F94] font-bold">
              {serviceData[activeservice].title}
            </div>
            <div className="mt-7">{serviceData[activeservice].desc}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OurService;
