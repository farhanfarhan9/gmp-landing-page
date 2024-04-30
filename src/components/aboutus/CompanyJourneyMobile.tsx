"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function CompanyJourneyMobile() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="bg-[#0E4F94] mb-4 pt-10 md:pt-10 pb-16 relative mt-96">
      <div className="text-2xl font-bold text-center text-white md:text-5xl">
        {Translator.t("company-journey", lang)}
      </div>
      <div className="px-12">
        <ol className="relative border-gray-200 border-s">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full scroll-pt-14 mt-1.5 -start-1.5 border border-white"></div>
            <time className="mb-1 text-lg font-bold leading-none text-white">
              2019
            </time>
            <h3 className="mt-1 text-base font-semibold text-white">
              {Translator.t("journey-title-1", lang)}
            </h3>
            <p className="mt-2 mb-4 text-base font-normal text-white">
              {Translator.t("journey-desc-title-1", lang)}
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full pt-1 -start-1.5 mt-1.5 border border-white"></div>
            <time className="mb-1 text-lg font-bold leading-none text-white">
              2020
            </time>
            <h3 className="mt-1 text-base font-semibold text-white">
              {Translator.t("journey-title-2", lang)}
            </h3>
            <p className="mt-2 mb-4 text-base font-normal text-white">
              {Translator.t("journey-desc-title-2", lang)}
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full pt-1 -start-1.5 mt-1.5 border border-white"></div>
            <time className="mb-1 text-lg font-bold leading-none text-white">
              2021
            </time>
            <h3 className="mt-1 text-base font-semibold text-white">
              {Translator.t("journey-title-3", lang)}
            </h3>
            <p className="mt-2 mb-4 text-base font-normal text-white">
              {Translator.t("journey-desc-title-3", lang)}
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full pt-1 -start-1.5 mt-1.5 border border-white"></div>
            <time className="mb-1 text-lg font-bold leading-none text-white">
              2022
            </time>
            <h3 className="mt-1 text-base font-semibold text-white">
              {Translator.t("journey-title-4", lang)}
            </h3>
            <p className="mt-2 mb-4 text-base font-normal text-white">
              {Translator.t("journey-desc-title-4", lang)}
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full pt-1 -start-1.5 mt-1.5 border border-white"></div>
            <time className="mb-1 text-lg font-bold leading-none text-white">
              2023
            </time>
            <h3 className="mt-1 text-base font-semibold text-white">
              {Translator.t("journey-title-5", lang)}
            </h3>
            <p className="mt-2 mb-4 text-base font-normal text-white">
              {Translator.t("journey-desc-title-5", lang)}
            </p>
          </li>
        </ol>
      </div>
      {/* <div className="mx-auto mt-20 max-w-7xl">
        {lang === "en" ? (
          <Image
            src={"/img/about/timeline-en.svg"}
            alt=""
            width={1497}
            height={599}
          />
        ) : (
          <Image
            src={"/img/about/timeline-id.svg"}
            alt=""
            width={1497}
            height={599}
          />
        )}
      </div> */}
    </div>
  );
}

export default CompanyJourneyMobile;
