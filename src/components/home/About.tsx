import Image from "next/image";
import React from "react";
import AboutLearnMore from "./AboutLearnMore";
import Carousel from "@/components/home/CarouselComponent";

const About = () => {
  return (
    <section className="grid grid-cols-2 gap-3 py-28 items-center" id="about">
      <div className="md:pl-36 md:pr-12">
        <div className="font-bold text-4xl">ABOUT US</div>
        <div className="mt-6">
          <span className="font-bold">Satria Nusa</span> didirikan oleh engineer
          yang sudah berpengalaman di industri manufaktur dengan jejaring
          teknisi dan workshop di Jawa dan Sumatra.
        </div>
        <div className="mt-7">
          <span className="font-bold">Satria Nusa</span> merupakan salah satu
          perusahaan teknik dengan ekosistem industri yang terpadu.
        </div>

        <AboutLearnMore />
      </div>
      
      <Carousel />
    </section>
  );
};

export default About;
