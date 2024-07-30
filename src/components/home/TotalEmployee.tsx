"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function TotalEmployee() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="relative w-full">
      <Image
        unoptimized
        width={100}
        height={100}
        src={"/img/home/circle-employee.png"}
        className="absolute right-0 z-0 w-1/2 top-1/2 "
        alt=""
      />
      <div className="relative z-10 px-2 py-10 mt-10 space-y-10 md:space-y-20 md:mx-auto md:max-w-7xl">
        <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center">
          Total {Translator.t("employee", lang)}
        </div>
        <div className="flex flex-col gap-10 md:justify-between md:gap-0 md:flex-row">
          <div className="flex flex-col items-center space-y-2 text-black md:space-y-5">
            <Image
              src={"/img/home/400.png"}
              className="object-scale-down w-fit h-30 md:h-72"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-base font-semibold md:text-xl">
              {Translator.t("people", lang)}
            </p>
            <h2 className="text-lg font-semibold md:text-3xl">
              {Translator.t("noe", lang)}
            </h2>
          </div>
          <div className="flex flex-col items-center space-y-2 text-black md:space-y-5">
            <Image
              src={"/img/home/150.png"}
              className="object-scale-down w-fit h-30 md:h-72"
              alt=""
              width={40}
              height={40}
            />
            <p className="text-base font-semibold md:text-xl">
              {Translator.t("people", lang)}
            </p>
            <h2 className="text-lg font-semibold md:text-3xl">
              {Translator.t("sales-force", lang)}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalEmployee;
