import Image from "next/image";
import React from "react";
import AboutLearnMore from "./AboutLearnMore";

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

      <div className="flex">
        <div className="flex items-center">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/foto2.png"
            alt="foto2"
            className="w-72"
          />
        </div>
        <div className="flex items-center ml-3">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/foto1.png"
            alt="foto1"
            className="w-96"
          />
        </div>
        <div className="flex items-center ml-3">
          <Image
            unoptimized
            width={100}
            height={100}
            src="/foto3.png"
            alt="foto2"
            className="w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
