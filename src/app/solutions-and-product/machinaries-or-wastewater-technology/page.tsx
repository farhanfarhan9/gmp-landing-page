"use client";

import React from "react";
import Image from "next/image";
import Translator from "@/utils/Translator";
import ProjectCarousel from "@/components/ProjectCarousel";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <div>
      <div className="relative">
        <Image
          unoptimized
          width={100}
          height={100}
          className="w-full "
          src="/img/solutions-and-product/banner.png"
          alt=""
        />
        <h1 className="absolute w-1/2 mx-20 text-5xl font-bold text-white translate-y-32 top-10">
          {Translator.t("machinaries-title", lang)}
        </h1>
        <div className="py-20">
          <Image
            className="absolute right-0 z-0"
            src="/img/solutions-and-product/pattern.png"
            width={900}
            height={600}
            alt=""
          />
          <div className="w-1/2 mx-auto text-center">
            <h1 className="text-[#0E4F94] font-bold text-5xl">
              {Translator.t("machinaries-title", lang)}
            </h1>
            <p className="mt-5 text-base text-black">
              {Translator.t("machinaries-desc", lang)}
            </p>
          </div>
          <div className="container z-10 mx-auto">
            <div className="grid w-full grid-cols-1 gap-20 mt-10 md:grid-cols-2 lg:grid-cols-3 ">
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/mbr.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Membrane Bio Reactor (MBR)
                </p>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/reverse-osmosis.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Reverse Osmosis
                </p>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/daf.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Dissolved Air Flotation
                </p>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/aquahelix.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Aquahelix Surface Aerator
                </p>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/fp.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Filter Press
                </p>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/ws.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Wet Scrubber
                </p>
              </div>
              <div className="">
                <Image
                  width={100}
                  height={100}
                  className="w-full max-h-64 "
                  src="/img/solutions-and-product/lct.png"
                  alt=""
                />
                <p className="mt-2 text-xl font-medium text-center">
                Lamella Clarifier Tank
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
