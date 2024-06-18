"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function SalesProductivity() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-5 mt-5 space-y-10 md:py-10 md:mt-10 md:mx-auto md:max-w-7xl">
      <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center">
        Sales Productivity
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="flex items-center justify-center w-44 md:w-64 h-44 md:h-64 p-5 rounded-full bg-[#098AD2]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white md:text-8xl">85%</h1>
            <p className="text-base font-semibold text-white md:text-xl">
              Average of Collection Call
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-44 md:w-64 h-44 md:h-64 p-5 rounded-full bg-[#098AD2]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white md:text-8xl">95%</h1>
            <p className="text-base font-semibold text-white md:text-xl">Collection</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-44 md:w-64 h-44 md:h-64 p-5 rounded-full bg-[#098AD2]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white md:text-8xl">90%</h1>
            <p className="text-base font-semibold text-white md:text-xl">Active Outlets</p>
          </div>
        </div>
      </div>
      <p className="text-lg font-semibold text-center text-black md:text-xl">
      All linked to the incentive system
      </p>
    </div>
  );
}

export default SalesProductivity;
