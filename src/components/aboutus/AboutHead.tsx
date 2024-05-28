"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function AboutHead() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div>
      <div className="relative">
        <Image
          src={"/img/about/aboutus-bg1.png"}
          alt=""
          width={2000}
          height={800}
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
          <div className="w-full mx-4 text-xl font-bold text-white capitalize md:mx-auto max-w-7xl md:text-5xl">
            <div className="max-w-2xl leading-tight">Satria Nusa Enjinering <br />{Translator.t("about-us", lang)}</div>
          </div>
        </div>
      </div>
      <Image
        src="/img/about/aboutus-bg2.png"
        width={2000}
        height={800}
        alt=""
      />
      <div className="mx-4 mt-16 mb-12 md:mx-auto max-w-7xl md:mb-64">
        <div className="text-xl md:text-5xl max-w-3xl mx-auto font-bold text-[#0E4F94] text-center capitalize leading-tight" style={{ lineHeight: 1.25 }}>
          {Translator.t("about-us-title", lang)}
        </div>
        <div className="text-base mt-7">
          <div>{Translator.t("about-us-desc-1", lang)}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutHead;
