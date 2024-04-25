"use client";
import Impact from "./Impact";
import About from "./About";
import Image from "next/image";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function Journey() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  return (
    <div className="relative bg-[#EDF2F5]">
      <Image
        className="absolute top-28 opacity-10"
        src="/img/home/journeybg.png"
        alt=""
        width={400}
        height={300}
      />
      <Impact />
      <div className="flex pt-[30rem] pb-32 mx-auto max-w-7xl">
        <div className="text-base">
          <div className="text-[#0E4F94] text-5xl font-bold max-w-md capitalize">
            {Translator.t("journey-title", lang)}
          </div>
          <div className="mt-7">{Translator.t("journey-desc-1", lang)}</div>
          <div className="mt-7">{Translator.t("journey-desc-2", lang)}</div>
          <div className="mt-10">
            <Link
              href={Translator.gotoUrl("/about-us", lang)}
              className="text-white bg-[#0E4F94] py-2 px-4 rounded-3xl hover:bg-blue-700"
            >
              {Translator.t("learn-more", lang)}
            </Link>
          </div>
        </div>
        <div className="w-[500px]">
          <About />
        </div>
      </div>
    </div>
  );
}

export default Journey;
