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
    <div className="py-10 mt-10 space-y-10 md:mx-auto md:max-w-7xl">
      <div className="text-4xl font-semibold text-[#098AD2] text-center">
        Sales Productivity
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex items-center justify-center w-64 h-64 p-5 rounded-full bg-[#098AD2]">
          <div className="text-center">
            <h1 className="font-bold text-white text-8xl">85%</h1>
            <p className="text-xl font-semibold text-white">
              Average of Collection Call
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-64 h-64 p-5 rounded-full bg-[#098AD2]">
          <div className="text-center">
            <h1 className="font-bold text-white text-8xl">95%</h1>
            <p className="text-xl font-semibold text-white">Collection</p>
          </div>
        </div>
        <div className="flex items-center justify-center w-64 h-64 p-5 rounded-full bg-[#098AD2]">
          <div className="text-center">
            <h1 className="font-bold text-white text-8xl">90%</h1>
            <p className="text-xl font-semibold text-white">Active Outlets</p>
          </div>
        </div>
      </div>
      <p className="text-xl font-semibold text-center text-black">
      All linked to the incentive system
      </p>
    </div>
  );
}

export default SalesProductivity;
