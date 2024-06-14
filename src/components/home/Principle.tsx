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
    <div className="py-10 mt-10 md:mx-auto md:max-w-7xl">
      <div className="flex gap-5">
        <Image
          className=""
          src={"/img/home/principle.png"}
          alt=""
          width={400}
          height={300}
        />
        <div className="flex flex-col my-auto">
          <div className="text-4xl font-semibold text-[#098AD2] text-left">
            Principle
          </div>
          <div className="flex gap-5 mt-5">
            <div className="bg-[#D9F1FF] rounded-lg p-5 pb-10 space-y-5 flex-1">
              <h1 className="text-[#098AD2] text-8xl font-bold">22</h1>
              <p className="text-[#098AD2] text-xl font-semibold">Pharmaceutical</p>
              <p className="text-base text-black">Operational Area SUMUT & DI Aceh</p>
              <p className="text-sm text-[#098AD2]">*Excluding Sub Distributor Agency</p>
            </div>
            <div className="bg-[#E3F1F4] rounded-lg p-5 pb-10 space-y-5 flex-1">
              <h1 className="text-[#098AD2] text-8xl font-bold">15</h1>
              <p className="text-[#098AD2] text-xl font-semibold">Fast Moving Consumer Goods</p>
              <p className="text-base text-black">Operational Area SUMUT (Medan, R. Prapat, P. Siantar)DI Aceh (Banda Aceh, Lhokseumawe, Langsa)</p>
            </div>
            <div className="bg-[#D9F1FF] rounded-lg p-5 pb-10 space-y-5 flex-1">
              <h1 className="text-[#098AD2] text-8xl font-bold">13</h1>
              <p className="text-[#098AD2] text-xl font-semibold">Food & Beverage</p>
              <p className="text-base text-black">Operational Area SUMUT (Medan, R. Prapat, P. Siantar) DI Aceh (Banda Aceh, Lhokseumawe, Langsa)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principle;
