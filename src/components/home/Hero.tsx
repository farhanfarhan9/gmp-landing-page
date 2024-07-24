"use client";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
import Image from "next/image.js";

const Hero = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <section className="relative flex items-center justify-center h-[320px] md:h-auto pt-20">
      <Image
        src={"/img/home/hero.png"}
        className="object-cover w-full h-full"
        alt=""
        width={2000}
        height={400}
      />

      <div className="absolute z-10 w-full px-4 mx-auto md:max-w-7xl ">
        <h1 className="text-2xl font-semibold text-center text-white md:text-left md:text-5xl">
          PT. Global Mitra Prima
        </h1>

        <h3 className="w-2/3 mx-auto mt-10 text-base font-normal leading-8 text-center text-white md:mx-0 md:text-left md:text-3xl">
          {Translator.t("hero-text", lang)}
        </h3>
      </div>
    </section>
  );
};

export default Hero;
