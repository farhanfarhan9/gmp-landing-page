"use client";
import React from "react";
import AboutLearnMore from "./AboutLearnMore";
import NewCarousel from "./NewCarousel";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="grid grid-cols-2 gap-3 py-28 items-center" id="about">
      <div className="md:pl-36 md:pr-12">
        <div className="font-bold text-4xl">{t("about_us")}</div>
        <div className="mt-6">
          <span className="font-bold">Satria Nusa</span> {t("about_satrianusa_1")}
        </div>
        <div className="mt-7">
          <span className="font-bold">Satria Nusa</span> {t("about_satrianusa_2")}
        </div>

        <AboutLearnMore />
      </div>
      
      <div className="w-full flex items-center justify-center relative">
        {/* <Carousel /> */}
        <NewCarousel />

      </div>
    </section>
  );
};

export default About;
