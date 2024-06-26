"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function InfrastructureIt() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-5 mx-auto mt-5 space-y-10 md:py-10 md:mt-10">
      <div className="text-4xl font-semibold text-[#098AD2] text-center flex justify-between gap-5">
        <Image
          className="hidden md:block"
          src={"/img/home/infoleft.png"}
          alt=""
          width={400}
          height={300}
        />
        <div className="flex flex-col px-2 mx-auto my-auto space-y-5 md:space-y-10 md:mx-0">
          <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center flex justify-center gap-3 md:gap-5">
            <span className="border-r-2 md:border-r-4 border-[#098AD2] pr-3">
              {Translator.t("infrastructure", lang)}
            </span>
            <span>IT</span>
          </div>
          <div className="px-4 mx-auto py-2 w-fit border border-[#098AD2] bg-[#D9F1FF] rounded-full">
            <p className="text-base md:text-xl font-semibold text-[#098AD2]">
              {Translator.t("sfa-sales", lang)}
            </p>
          </div>
          <div className="px-4 mx-auto py-2 w-fit border border-[#098AD2] bg-[#D9F1FF] rounded-full">
            <p className="text-base md:text-xl font-semibold text-[#098AD2]">
              {Translator.t("interface-it", lang)}
            </p>
          </div>
        </div>
        <Image
          className="hidden md:block"
          src={"/img/home/inforight.png"}
          alt=""
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}

export default InfrastructureIt;
