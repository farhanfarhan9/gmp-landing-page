"use client";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
import Image from "next/image.js";

const Hero = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <section className="relative">
      <Image
        src={"/img/home/hero.png"}
        className="object-cover h-[320px] md:h-auto"
        alt=""
        width={2000}
        height={400}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white -mt-10 text-center font-bold leading-snug">
        <div className="w-[280px] md:w-[800px] capitalize text-xl md:text-6xl">
          {Translator.t("hero-1", lang)} <br />{" "}
          <div>{Translator.t("hero-2", lang)}</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
