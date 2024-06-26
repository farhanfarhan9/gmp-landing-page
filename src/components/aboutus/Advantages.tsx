"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function Advantages() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="relative text-base">
      <div className="flex flex-col md:flex-row md:w-[2000px] max-w-7xl md:absolute top-0 left-1/2 md:-translate-x-1/2 md:-mt-36 rounded-3xl shadow-md overflow-hidden z-10 mb-20 md:mb-0">
        <div className="md:w-1/2 bg-[#EDF2F5] py-10 px-12">
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
        <div className="md:w-1/2 bg-[#DFF5FF] py-10 px-12">
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

      <div className="relative" id="advantage">
        <div className="z-0 hidden md:block">
          <Image
            src="/img/about/adventagebg1.png"
            width={2000}
            height={800}
            alt=""
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/img/about/adventagebg1.png"
            width={2000}
            height={800}
            alt=""
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-10 md:top-1/2">
          <div className="pb-10 text-2xl font-bold text-center text-white md:text-5xl md:pb-0">
            {Translator.t("our-advantages", lang)}
          </div>
          <div className="grid grid-cols-1 gap-4 px-12 pb-10 mx-auto mt-0 text-white bg-[#0E4F94] md:bg-inherit md:mt-10 md:grid-cols-2 md:px-0 md:gap-7 max-w-7xl md:pb-10">
            <div>
              <ul className="space-y-3 list-disc">
                <li>{Translator.t("advantages-1", lang)}</li>
                <li>{Translator.t("advantages-2", lang)}</li>
                <li>{Translator.t("advantages-3", lang)}</li>
                <li>{Translator.t("advantages-4", lang)}</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 list-disc">
                <li>{Translator.t("advantages-5", lang)}</li>
                <li>{Translator.t("advantages-6", lang)}</li>
                <li>{Translator.t("advantages-7", lang)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
