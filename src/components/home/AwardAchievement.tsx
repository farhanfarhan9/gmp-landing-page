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
    <div className="py-10 mt-10 space-y-10 md:mx-auto md:max-w-7xl">
      <div className="text-4xl font-semibold text-[#098AD2] text-center">
        Sales Productivity
      </div>
      <div className="container">
        <div className="flex flex-col grid-cols-9 p-2 mx-auto text-white md:grid ">
          <div className="flex flex-row-reverse pt-5 md:contents">
            <div className="col-start-1 col-end-5 px-4 py-2  ml-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">1995 & 1996</h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">
                FROM PT. CARLO ERBA FARMITALIA INTERNATIONAL INDONESIA
              </p>
            </div>
          </div>
          <div className="flex pt-5 md:contents">
            <div className="col-start-1 col-end-5 space-y-3 text-right">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">
                FROM PT. CARLO ERBA FARMITALIA INTERNATIONAL INDONESIA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 px-4 py-2  mr-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">1995 & 1996</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 px-4 py-2  ml-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2003</h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">FROM PT. MAKARIZO INDONESIA</p>
            </div>
          </div>
          <div className="flex pt-5 md:contents">
            <div className="col-start-1 col-end-5 space-y-3 text-right">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">FROM PT. SAKA FARMA</p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 px-4 py-2  mr-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2000 & 2005</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 px-4 py-2  ml-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2004</h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <p className="text-xl text-[#098AD2] font-semibold">
                BEST CUSTOMER NATIONAL
              </p>
              <p className="text-xl text-black">FROM PT. KIMIA FARMA</p>
            </div>
          </div>
          <div className="flex pt-5 md:contents">
            <div className="col-start-1 col-end-5 space-y-3 text-right">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">FROM PT. ERRITA FARMA</p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 px-4 py-2  mr-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2005</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 ml-auto space-y-3">
              <h3 className="text-lg font-semibold px-4 py-2 bg-[#098AD2] rounded-full shadow-md h-fit">
                2005 SEMESTER II
              </h3>
              <h3 className="text-lg font-semibold px-4 py-2 bg-[#098AD2] rounded-full shadow-md h-fit">
                2008 QUARTER I
              </h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">FROM PT. MUSTIKA RATU</p>
            </div>
          </div>
          <div className="flex pt-5 md:contents">
            <div className="col-start-1 col-end-5 space-y-3 text-right">
              <p className="text-xl text-[#098AD2] font-semibold">
                THE BEST DISTRIBUTOR
              </p>
              <p className="text-xl text-black">
                FROM PT. JOHNSON & JOHNSON INDONESIA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 px-4 py-2  mr-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2007</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 px-4 py-2  ml-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2013, 2017</h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <p className="text-xl text-[#098AD2] font-semibold">
                LOYALTY PROGRAM SEMANGAT AWARDS
              </p>
              <p className="text-xl text-black">FROM PT. MERCK TBK</p>
            </div>
          </div>
          <div className="flex pt-5 md:contents">
            <div className="col-start-1 col-end-5 space-y-3 text-right">
              <p className="text-xl text-[#098AD2] font-semibold">
                APPRECIATION AWARDS
              </p>
              <p className="text-xl text-black">
                FROM PT. RECKITT BENCKISER INDONESIA
              </p>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 px-4 py-2  mr-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2014</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 px-4 py-2  ml-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2017</h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <p className="text-xl text-[#098AD2] font-semibold">
                EXCELLENT BUSINESS PARTNER AWARDS
              </p>
              <p className="text-xl text-black">FROM PT. JOHNSON & JOHNSON</p>
            </div>
          </div>
          <div className="flex pt-5 md:contents">
            <div className="col-start-1 col-end-5 space-y-3 text-right">
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  RECOGNITION AWARDS
                </p>
                <p className="text-xl text-black">
                  FROM GLAXO SMITH KLINE INDONESIA
                </p>
              </div>
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  OUTSTANDING BUSSINESS PARTNER APPRECIATION
                </p>
                <p className="text-xl text-black">FROM PT. JOHNSON & JOHNSON</p>
              </div>
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  THE BEST DISTRIBUTOR
                </p>
                <p className="text-xl text-black">
                  FROM PT. RECKITT BENCKISER INDONESIA
                </p>
              </div>
            </div>
            <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 px-4 py-2  mr-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2018</h3>
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <div className="col-start-1 col-end-5 px-4 py-2  ml-auto bg-[#098AD2] rounded-full shadow-md h-fit">
              <h3 className="text-lg font-semibold">2022</h3>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[#098AD2] pointer-events-none"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-2 bg-white border-4 border-[#098AD2] rounded-full shadow top-1"></div>
            </div>
            <div className="col-start-6 col-end-10 space-y-3 leading-tight text-justify">
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  HIGHEST TOTAL DISTRIBUTION POINT ACHIEVEMENT AWARD
                </p>
                <p className="text-xl text-black">FROM PT. JOHNSON & JOHNSON</p>
              </div>
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  BEST SELLOUT GROWTH IN NESTLE BREAKFAST CEREAL CATEGORY
                </p>
                <p className="text-xl text-black">FROM PT. NESTLE INDONESIA</p>
              </div>
              <div>
                <p className="text-xl text-[#098AD2] font-semibold">
                  RUNNER UP DISTRIBUTOR LEAGUE
                </p>
                <p className="text-xl text-black">
                  FROM PT. MONDELEZ INDONESIA
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
