"use client";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";

function ReverseOsmosis() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <>
      <div className="flex w-full justify-center bg-[#EDF2F5]">
        <Image
          src="/img/solutions-and-product/machinaries-or-wastewater-technology/reverse-osmosis.png"
          unoptimized
          className="max-w-7xl object-cover mt-48 -my-40 z-50"
          alt=""
          width={1920}
          height={1080}
        />
      </div>
      <div className="flex w-full justify-end">
        <Image
          className="z-0"
          src="/img/solutions-and-product/pattern.png"
          width={900}
          height={600}
          alt=""
        />
      </div>
      <div className="flex w-full justify-center">
        <div className="max-w-7xl">
          <div className="mt-5">
            <span className="text-[#0E4F94] font-semibold">
              {Translator.t("reverse-osmosis-title", lang)}
            </span>
          </div>
          <p className="mt-5 leading-6">
            {Translator.t("reverse-osmosis-desc-1", lang)}
          </p>
          <p className="mt-5 leading-6">
            {Translator.t("reverse-osmosis-desc-2", lang)}
          </p>
          <p className="mt-5 leading-6">
            {Translator.t("reverse-osmosis-desc-3", lang)}
          </p>
          <p className="mt-5 leading-6">
            {Translator.t("reverse-osmosis-desc-4", lang)}
          </p>
          <p className="mt-5 leading-6">
            {Translator.t("reverse-osmosis-desc-5", lang)}
          </p>
          <p className="my-20 text-[#9C9C9C]">
            Design and Manufacturing by PT. Satria Nusa Enjinering
          </p>
        </div>
      </div>
    </>
  );
}

export default ReverseOsmosis;