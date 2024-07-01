"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function AwardAchievement() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-10 mt-10 space-y-10 md:mx-auto md:max-w-7xl" id="awards">
      <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center">
        {Translator.t("award", lang)}
      </div>
      <div className="container">
        <div className="flex flex-col grid-cols-9 p-2 mx-auto overflow-y-auto md:grid text-blue-50 max-h-lvh">
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">
                  1995 & 1996
                </h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-distiributor", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. CARLO ERBA FARMITALIA
                INTERNATIONAL INDONESIA
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="flex flex-col col-start-1 col-end-5 pb-5 mr-auto text-left md:pb-0 md:text-right md:mr-0 md:ml-auto">
              <div className="px-4 py-2 rounded-full shadow-md w-fit md:ml-auto h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">1997</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-distiributor", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. CARLO ERBA FARMITALIA
                INTERNATIONAL INDONESIA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2003</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-distiributor", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. MAKARIZO INDONESIA
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="flex flex-col col-start-1 col-end-5 pb-5 mr-auto text-left md:pb-0 md:text-right md:mr-0 md:ml-auto">
              <div className="px-4 py-2 rounded-full shadow-md w-fit md:ml-auto h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">
                  2000 & 2005
                </h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-distiributor", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. SAKA FARMA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2004</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-customer", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. KIMIA FARMA
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="flex flex-col col-start-1 col-end-5 pb-5 mr-auto text-left md:pb-0 md:text-right md:mr-0 md:ml-auto">
              <div className="px-4 py-2 rounded-full shadow-md w-fit md:ml-auto h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2005</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-distiributor", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. ERRITA FARMA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit mb-1 bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">
                  2005 SEMESTER II
                </h3>
              </div>
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit mb-2 bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">
                  2008 QUARTER I
                </h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-customer", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. KIMIA FARMA
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="flex flex-col col-start-1 col-end-5 pb-5 mr-auto text-left md:pb-0 md:text-right md:mr-0 md:ml-auto">
              <div className="px-4 py-2 rounded-full shadow-md w-fit md:ml-auto h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2007</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("best-distiributor", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. JOHNSON & JOHNSON INDONESIA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit mb-2 bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2013, 2017</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("loyalti-program", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. MERCK TBK
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="flex flex-col col-start-1 col-end-5 pb-5 mr-auto text-left md:pb-0 md:text-right md:mr-0 md:ml-auto">
              <div className="px-4 py-2 rounded-full shadow-md w-fit md:ml-auto h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2014</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("appr-award", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. RECKITT BENCKISER INDONESIA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit mb-2 bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2017</h3>
              </div>
              <p className="text-xl text-[#098AD2] font-semibold">
                {Translator.t("exellence-bp", lang)}
              </p>
              <p className="text-xl text-black">
                {Translator.t("from", lang)} PT. JOHNSON & JOHNSON
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="flex flex-col col-start-1 col-end-5 pb-5 mr-auto text-left md:pb-0 md:text-right md:mr-0 md:ml-auto">
              <div className="px-4 py-2 rounded-full shadow-md w-fit md:ml-auto h-fit bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2018</h3>
              </div>
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  {Translator.t("recognition-award", lang)}
                </p>
                <p className="text-xl text-black">
                  {Translator.t("from", lang)} GLAXO SMITH KLINE INDONESIA
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xl text-[#098AD2] font-semibold">
                  {Translator.t("outstanding")}
                </p>
                <p className="text-xl text-black">
                  {Translator.t("from", lang)} PT. JOHNSON & JOHNSON
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xl text-[#098AD2] font-semibold">
                  {Translator.t("best-distiributor", lang)}
                </p>
                <p className="text-xl text-black">
                  {Translator.t("from", lang)} PT. RECKITT BENCKISER INDONESIA
                </p>
              </div>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
          </div>
          <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-1 border-4 border-[#098AD2] bg-white rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 pb-5 mr-auto md:pb-0">
              <div className="px-4 py-2 rounded-full shadow-md w-fit h-fit mb-2 bg-[#098AD2]">
                <h3 className="text-lg font-semibold text-white">2017</h3>
              </div>
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  {Translator.t("highest-total", lang)}
                </p>
                <p className="text-xl text-black">
                  {Translator.t("from", lang)} PT. JOHNSON & JOHNSON
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xl text-[#098AD2] font-semibold">
                  {Translator.t("best-sellout")}
                </p>
                <p className="text-xl text-black">
                  {Translator.t("from", lang)} PT. NESTLE INDONESIA
                </p>
              </div>
              <div className="mt-4">
                <p className="text-xl text-[#098AD2] font-semibold">
                  {Translator.t("runner-up", lang)}
                </p>
                <p className="text-xl text-black">
                  {Translator.t("from", lang)} PT. MONDELEZ INDONESIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardAchievement;
