"use client";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
import Image from "next/image.js";

const Hero = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <section className="relative flex items-center justify-center h-[320px] md:h-auto">
      <Image
        src={"/img/home/hero.png"}
        className="object-cover w-full h-full"
        alt=""
        width={2000}
        height={400}
      />

      <div className="absolute z-10 w-full px-4 mx-auto md:max-w-7xl ">
        <h1 className="text-5xl font-semibold text-white">
          PT. Global Mitra Prima
        </h1>

        <h3 className="w-2/3 mt-10 text-3xl font-normal leading-8 text-white">
          Leading Distributor for Pharmaceutical and FMCG in North Sumatra and
          DI Aceh
        </h3>
      </div>
    </section>
  );
};

export default Hero;
