"use client";
import React from "react";
import AboutLearnMore from "./AboutLearnMore";
import Translator from "@/utils/Translator";
import NewCarousel from "./NewCarousel";
import { useSearchParams } from "next/navigation";
import Carousel from "@/components/home/CarouselComponent";

const About = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 mb-4 md:mb-10 px-10 md:mx-0 items-center"
      id="about"
    >
      <div className="md:pl-36 md:pr-12 mt-10">
        <div className="font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
          {Translator.t("about-us", lang)}
        </div>
        <div className="mt-6">
          <span className="font-bold text-base md:text-lg lg:text-xl xl:text-1xl mr-1">
            PT. Satria Nusa Enjinering (Satria Nusa)
          </span>
          <span className="text-base md:text-lg lg:text-xl xl:text-1xl">
            {Translator.t("satria-nusa-desc-1", lang)}
          </span>
        </div>

        <AboutLearnMore searchParams={searchParams} />
      </div>

      <div className="hidden xl:flex justify-center">
        <div className="w-full flex items-center justify-center relative mb-4 mt-4">
          <NewCarousel />
        </div>
      </div>
      <div className="xl:hidden flex-row justify-center">
        <div className="w-full flex items-center justify-center relative mb-4 mt-4">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default About;
