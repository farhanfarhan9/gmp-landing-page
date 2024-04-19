"use client";

import React from "react";
import Image from "next/image";
import ProjectCarousel from "@/components/ProjectCarousel";

const page = () => {
  return (
    <div>
      <div className="relative">
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full "
          src="/img/project/banner.png"
          alt=""
        />
        <h1 className="absolute w-1/2 mx-20 text-5xl font-bold text-white translate-y-1/2 top-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          deleniti quam minima{" "}
        </h1>
        <div className="bg-[#EDF2F5] py-20">
          <ProjectCarousel />
        </div>
        <div className="py-20">
          <div className="w-1/2 mx-auto text-center">
            <h1 className="text-[#0E4F94] font-bold text-5xl">
              Recent Clients and Projects
            </h1>
            <p className="mt-5 text-base">
              We are proud to have been a trusted partner by various companies
              in Indonesia to fulfill their needs in wastewater treatment. With
              our in-depth knowledge, rich experience & commitment to quality &
              sustainability, we continue to innovate to answer new challenges
              in the wastewater treatment industry.
            </p>
            <div className="container">
              <div className="grid w-full grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/palm_oil.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">Palm Oil Mill</p>
                  <a href="#" className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-5 bottom-5 hover:bg-[#0A3A6E]">View More</a>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/fnb.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">Food & Beverages Factory</p>
                  <a href="#" className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-5 bottom-5 hover:bg-[#0A3A6E]">View More</a>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/hospital.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">Hospital</p>
                  <a href="#" className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-5 bottom-5 hover:bg-[#0A3A6E]">View More</a>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/power_plant.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">Power Plant</p>
                  <a href="#" className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-5 bottom-5 hover:bg-[#0A3A6E]">View More</a>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/shopping.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">Shopping Center</p>
                  <a href="#" className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-5 bottom-5 hover:bg-[#0A3A6E]">View More</a>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/goods.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">Goods Factory</p>
                  <a href="#" className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-5 bottom-5 hover:bg-[#0A3A6E]">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
