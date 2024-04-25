"use client";

import React from "react";
import Image from "next/image";
import Translator from "@/utils/Translator";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ModalVideo from "@/components/modal/ModalVideo";

const Project = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <div className="overflow-x-hidden ">
      <div className="relative">
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full "
          src="/img/project/banner.png"
          alt=""
        />
        <div className="mx-auto max-w-7xl">
          <h1 className="absolute top-0 w-1/2 px-5 text-xl font-bold text-white capitalize translate-y-5 xl:px-0 lg:px-0 md:translate-y-20 xl:translate-y-32 lg:translate-y-10 sm:text-3xl md:text-5xl lg:top-10">
            {Translator.t("project-reference", lang)}
          </h1>
        </div>
        <div className="bg-[#EDF2F5] py-5 px-5 xl:px-0 lg:py-20">
          <ProjectCarousel />
        </div>
        <div className="py-20">
          <div className="relative flex flex-col px-5 mx-auto xl:px-0 lg:px-0 max-w-7xl lg:flex-row">
            <div className="w-full my-auto lg:w-3/5">
              <h1 className="text-5xl text-[#0E4F94] font-bold">
                {Translator.t("water-crisis", lang)}:
              </h1>
              <p className="mt-5 text-3xl">
                {Translator.t("water-crisis-desc", lang)}
              </p>
            </div>
            <div className="relative z-10 w-full mt-5 lg:w-2/5 lg:mt-0">
              <Image
                src="/img/project/video/vd1.svg"
                alt="Carousel picture"
                width={150}
                height={150}
                className="w-full rounded-md shadow-md"
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 z-50">
                <div className="flex items-center justify-center h-full">
                  <button className="hover:scale-110">
                    <ModalVideo videoUrl="https://www.youtube.com/embed/AqIioQfDU0A">
                      <svg
                        width="40"
                        height="36"
                        viewBox="0 0 40 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <ellipse
                          cx="19.2477"
                          cy="18.1152"
                          rx="17.2443"
                          ry="17.3618"
                          fill="white"
                        />
                        <path
                          d="M25.6092 15.9306L22.4008 13.0804L17.1729 8.4361C16.0655 7.46673 14.1763 8.1612 14.1763 9.55014V18.5638V26.6804C14.1763 28.0694 16.0655 28.7639 17.1729 27.78L25.6092 20.2855C26.961 19.0991 26.961 17.1315 25.6092 15.9306Z"
                          fill="#0E4F94"
                        />
                      </svg>
                    </ModalVideo>
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 z-0 translate-x-40 -translate-y-20">
              <Image
                src="/img/project/video/pattern1.svg"
                alt="Carousel picture"
                width={150}
                height={150}
                className="w-full rounded-md "
              />
            </div>
          </div>
          <div className="my-32">
            <div className="relative w-2/3 mx-auto mt-20 text-center max-w-7xl lg:w-1/2">
              <h1 className="text-[#0E4F94] font-bold text-5xl">
                {Translator.t("recent-client", lang)}
              </h1>
              <p className="mt-5 text-base">
                {Translator.t("recent-client-desc", lang)}
              </p>
            </div>
            <div className="mx-auto max-w-7xl">
              <div className="grid w-full grid-cols-1 gap-20 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full"
                    src="/img/project/recent_project/palm_oil.png"
                    alt=""
                  />
                  <p className="absolute mr-2 text-3xl font-medium text-left text-white top-10 left-10">
                    {Translator.t("palm-oil", lang)}
                  </p>
                  <Link
                    href="/palm-oil-mill"
                    className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                  >
                    {Translator.t("view-more", lang)}
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/fnb.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-10 left-10">
                    {Translator.t("fnb", lang)}
                  </p>
                  <Link
                    href="/food-and-beverages-factory"
                    className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                  >
                    {Translator.t("view-more", lang)}
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/hospital.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-10 left-10">
                    {Translator.t("hospital", lang)}
                  </p>
                  <Link
                    href="/hospital"
                    className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                  >
                    {Translator.t("view-more", lang)}
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/power_plant.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-10 left-10">
                    {Translator.t("pp", lang)}
                  </p>
                  <Link
                    href="/power-plant"
                    className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                  >
                    {Translator.t("view-more", lang)}
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/shopping.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-10 left-10">
                    {Translator.t("sc", lang)}
                  </p>
                  <Link
                    href="/shopping-center"
                    className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                  >
                    {Translator.t("view-more", lang)}
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    className="w-full "
                    src="/img/project/recent_project/goods.png"
                    alt=""
                  />
                  <p className="absolute text-3xl font-medium text-left text-white top-10 left-10">
                    {Translator.t("gf", lang)}
                  </p>
                  <Link
                    href="/goods-factory"
                    className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                  >
                    {Translator.t("view-more", lang)}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
