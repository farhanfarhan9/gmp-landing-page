"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

function AboutHead() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div>
      <div className="relative">
        <Image
          src={"/img/about/aboutus-bg1.png"}
          alt=""
          width={2000}
          height={800}
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center">
          <div className="w-full mx-auto max-w-7xl text-5xl font-bold text-white">
            <div className="max-w-2xl">{Translator.t("about-us", lang)}</div>
          </div>
        </div>
      </div>
      <Image
        src="/img/about/aboutus-bg2.png"
        width={2000}
        height={800}
        alt=""
      />
      <div className="mx-auto max-w-7xl mt-16 mb-64">
        <div className="text-5xl max-w-3xl mx-auto font-bold text-[#0E4F94] text-center">
          {Translator.t("about-us-title", lang)}
        </div>
        <div className="mt-7 text-base">
          <div>{Translator.t("about-us-desc-1", lang)}</div>
          <div className="mt-7">{Translator.t("about-us-desc-2", lang)}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutHead;
