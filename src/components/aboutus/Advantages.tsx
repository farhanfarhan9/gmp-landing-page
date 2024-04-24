"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

function Advantages() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="relative text-base">
      <div className="flex w-[2000px] max-w-7xl absolute top-0 left-1/2 -translate-x-1/2 -mt-36 rounded-3xl shadow-md overflow-hidden">
        <div className="w-1/2 bg-[#EDF2F5] py-10 px-12">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/img/icons/vision.png"}
              width={50}
              height={50}
              alt=""
            />
            <div className="text-4xl text-[#0E4F94] font-bold">
              {Translator.t("vision", lang)}
            </div>
          </div>
          <div className="mt-5">{Translator.t("vision-desc", lang)}</div>
        </div>
        <div className="w-1/2 bg-[#DFF5FF] py-10 px-12">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/img/icons/mission.png"}
              width={50}
              height={50}
              alt={""}
            />
            <div className="text-4xl text-[#0E4F94] font-bold">
              {Translator.t("mission", lang)}
            </div>
          </div>
          <div className="mt-5">
            <ul className="list-disc">
              <li>{Translator.t("mission-1", lang)}</li>
              <li>{Translator.t("mission-2", lang)}</li>
              <li>{Translator.t("mission-3", lang)}</li>
              <li>{Translator.t("mission-4", lang)}</li>
              <li>{Translator.t("mission-5", lang)}</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src="/img/about/adventagebg1.png"
        width={2000}
        height={800}
        alt=""
      />
      <div className="absolute top-1/2 bottom-0 right-0 left-0">
        <div className="text-5xl font-bold text-white text-center">
          {Translator.t("our-advantages", lang)}
        </div>
        <div className="text-white grid grid-cols-2 gap-7 mt-10 max-w-7xl mx-auto">
          <div>
            <ul className="list-disc">
              <li>{Translator.t("advantages-1", lang)}</li>
              <li>{Translator.t("advantages-2", lang)}</li>
              <li>{Translator.t("advantages-3", lang)}</li>
              <li>{Translator.t("advantages-4", lang)}</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>{Translator.t("advantages-5", lang)}</li>
              <li>{Translator.t("advantages-6", lang)}</li>
              <li>{Translator.t("advantages-7", lang)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
