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
        <img
          src="/img/solutions-and-product/machinaries-or-wastewater-technology/reverse-osmosis.png"
          className="max-w-7xl w-full object-cover mt-5 xl:mt-48 px-5 xl:px-0 -my-40 z-50"
          alt=""
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
      <div className="flex w-full justify-center px-5 xl:px-0">
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
