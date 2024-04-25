"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function CompanyJourney() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="bg-[#0E4F94] mb-4 pt-10 pb-16">
      <div className="text-6xl font-bold text-white text-center">
        {Translator.t("company-journey", lang)}
      </div>
      <div className="max-w-7xl mx-auto mt-12">
        {lang === "en" ? (
          <Image
            src={"/img/about/timeline-en.svg"}
            alt=""
            width={1497}
            height={599}
          />
        ) : (
          <Image
            src={"/img/about/timeline-id.svg"}
            alt=""
            width={1497}
            height={599}
          />
        )}
      </div>
    </div>
  );
}

export default CompanyJourney;
