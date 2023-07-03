import React from "react";
import AboutLearnMore from "./AboutLearnMore";
import Carousel from "@/components/home/CarouselComponent";
import NewCarousel from "./NewCarousel";

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 py-28 mx-4 md:mx-0 items-center" id="about">
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
      
      <div className="w-full flex items-center justify-center relative">
        {/* <Carousel /> */}
        <NewCarousel />

      </div>
    </section>
  );
};

export default About;
