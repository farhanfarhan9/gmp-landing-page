"use client";
import About from "@/components/home/About";
import Expand from "@/components/home/Expand";
import Hero from '@/components/home/Hero';
import Marquee from "react-fast-marquee";
import Image from "next/image";
import OurProject from "./ourproject";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";
import Impact from "@/components/home/Impact";

export default function Home() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <>
      <Hero />
      <Impact />
      <About />
      <section id="our-service-section">
        <Expand />
      </section>
      <section className="flex justify-center py-12" id="portofolio">
        <div className="flex flex-col max-w-7xl mx-4">
          <div className="uppercase font-bold text-center mt-7 text-3xl md:text-4xl lg:text-5xl">
            {Translator.t("project-portofolio-title", lang)}
          </div>
          <p className="text-center mt-8 mb-10 text-base md:text-lg lg:text-xl">
            {Translator.t("project-portofolio-desc", lang)}
          </p>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full my-5"
            src="/map.png"
            alt=""
          />
        </div>
      </section>
      <OurProject />
      <section className="flex flex-col justify-center">
        <div className="uppercase font-bold text-center mt-14 text-3xl md:text-4xl lg:text-5xl">
          {Translator.t("our-products-partners", lang)}
        </div>
        <span className="w-5/6 md:w-1/2 mx-auto lg:mb-36">
          <Marquee speed={100}>
            <div className="flex justify-center space-x-9 py-12 items-center mx-5">
              <Image
                unoptimized
                width={100}
                height={100}
                src="/smi.png"
                className="h-16"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                className="h-16"
                src="/aquahelix-mbr-pump.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/aquahelix.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/teco.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/sge.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/nadic.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/seg.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/yuema.png"
                alt=""
              />
              <Image
                unoptimized
                width={100}
                height={100}
                src="/transm.png"
                alt=""
              />
            </div>
          </Marquee>
        </span>
      </section>
    </>
  );
}
