"use client";

import React from "react";
import Image from "next/image";
import Translator from "@/utils/Translator";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

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
              {Translator.t("recent-client", lang)}
            </h1>
            <p className="mt-5 text-base">
              {Translator.t("recent-client-desc", lang)}
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid w-full grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
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
                <a
                  href="#"
                  className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                >
                  {Translator.t("view-more", lang)}
                </a>
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
                <a
                  href="#"
                  className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                >
                  {Translator.t("view-more", lang)}
                </a>
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
                <a
                  href="#"
                  className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                >
                  {Translator.t("view-more", lang)}
                </a>
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
                <a
                  href="#"
                  className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                >
                  {Translator.t("view-more", lang)}
                </a>
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
                <a
                  href="#"
                  className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                >
                  {Translator.t("view-more", lang)}
                </a>
              </div>
              <div className="relative">
                <Image
                  width={100}
                  height={100}
                  className="w-full "
                  src="/img/project/recent_project/goods.png"
                  alt=""
                />
                <p className="absolute text-3xl font-medium text-left text-white top-5 left-5">
                  {Translator.t("gf", lang)}
                </p>
                <a
                  href="#"
                  className="text-base px-4 py-2 bg-[#0E4F94] text-white rounded-full absolute left-10 bottom-10 hover:bg-[#0A3A6E]"
                >
                  {Translator.t("view-more", lang)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
