"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Outlets() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="px-2 py-5 mt-5 md:py-10 md:mt-10 md:mx-auto md:max-w-7xl md:px-0">
      <div className="flex flex-col md:flex-row">
        <div className="mx-auto md:mx-0 md:my-auto md:w-1/3 ">
          <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center md:text-left">
            {Translator.t("number-outlet", lang)}
          </div>
          <p className="text-lg font-medium text-center md:text-3xl md:text-left">
            *{Translator.t("number-asper", lang)}
          </p>
        </div>
        <Image
          className="w-full md:w-2/3"
          src={"/img/home/outlets.png"}
          alt=""
          width={700}
          height={300}
        />
      </div>
    </div>
  );
}

export default Outlets;
