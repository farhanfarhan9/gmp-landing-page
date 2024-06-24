"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Principle() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="px-2 py-10 mt-10 md:mx-auto md:max-w-7xl md:px-0">
      <div className="text-xl md:hidden md:text-4xl font-bold text-[#098AD2] text-center">
      Principle
      </div>
      <div className="flex gap-5">
        <Image
          className="hidden md:block"
          src={"/img/home/principle.png"}
          alt=""
          width={400}
          height={300}
        />
        <div className="flex flex-col my-auto">
          <div className="text-4xl font-semibold text-[#098AD2] text-left hidden md:block">
            Principle
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5 md:flex">
            <div className="bg-[#D9F1FF] rounded-lg p-5 pb-10 space-y-5 h-fit md:h-auto w-full">
              <h1 className="text-[#098AD2] text-8xl font-bold">22</h1>
              <p className="text-[#098AD2] text-lg md:text-xl font-semibold">Pharmaceutical</p>
              <p className="text-sm text-black md:text-base">Operational Area SUMUT & DI Aceh</p>
              <p className="text-xs md:text-sm text-[#098AD2]">*Excluding Sub Distributor Agency</p>
            </div>
            <div className="bg-[#E3F1F4] rounded-lg p-5 pb-10 space-y-5 h-fit md:h-auto w-full">
              <h1 className="text-[#098AD2] text-8xl font-bold">15</h1>
              <p className="text-[#098AD2] text-lg md:text-xl font-semibold">Fast Moving Consumer Goods</p>
              <p className="text-sm text-black md:text-base">Operational Area SUMUT (Medan, R. Prapat, P. Siantar)DI Aceh (Banda Aceh, Lhokseumawe, Langsa)</p>
            </div>
            <div className="bg-[#D9F1FF] rounded-lg p-5 pb-10 space-y-5 h-fit md:h-auto w-full">
              <h1 className="text-[#098AD2] text-8xl font-bold">13</h1>
              <p className="text-[#098AD2] text-lg md:text-xl font-semibold">Food & Beverage</p>
              <p className="text-sm text-black md:text-base">Operational Area SUMUT (Medan, R. Prapat, P. Siantar) DI Aceh (Banda Aceh, Lhokseumawe, Langsa)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principle;
