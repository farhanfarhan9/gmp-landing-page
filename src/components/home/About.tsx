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
          <span className="font-bold">PT. Satria Nusa Enjinering (Satria Nusa)</span> merupakan perusahaan teknik yang didirikan dengan pengalaman lebih dari 30 tahun di sektor manufakturing dan pertambangan. Rekam jejak Satria Nusa dibuktikan dengan kepercayaan dari Teco, Ebara, Torishima dan Tsurumi untuk membantu pelanggan mereka di seluruh Indonesia untuk penggunaan yang tepat mutu dan tepat biaya.
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
