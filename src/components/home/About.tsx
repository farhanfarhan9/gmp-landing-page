import React from "react";
import AboutLearnMore from "./AboutLearnMore";
import NewCarousel from "./NewCarousel";

const About = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10 mx-4 md:mx-0 items-center" id="about">
      <div className="md:pl-36 md:pr-12 mt-10">
        <div className="font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl">ABOUT US</div>
        <div className="mt-6">
          <span className="font-bold text-base md:text-lg lg:text-xl xl:text-1xl mr-1">
            PT. Satria Nusa Enjinering (Satria Nusa) 
          </span>
          <span className="text-base md:text-lg lg:text-xl xl:text-1xl">
            merupakan perusahaan teknik yang didirikan dengan pengalaman lebih dari 30 tahun di sektor manufakturing dan pertambangan. Rekam jejak Satria Nusa dibuktikan dengan kepercayaan dari Teco, Ebara, Torishima dan Tsurumi untuk membantu pelanggan mereka di seluruh Indonesia untuk penggunaan yang tepat mutu dan tepat biaya.
          </span>
        </div>


        <AboutLearnMore />
      </div>
      
      <div className="w-full flex items-center justify-center relative">
        <NewCarousel />

      </div>
    </section>
  );
};

export default About;
