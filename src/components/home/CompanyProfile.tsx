"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

function CompanyProfile() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="md:mx-auto mx-4 md:max-w-7xl rounded-3xl px-8 md:px-16 py-20 my-7 shadow-md bg-gradient-to-b from-[#DFF5FF] to-white relative overflow-hidden mt-10">
      <Image
        className="absolute right-0 bottom-0"
        src={"/img/home/companyprofilebg.png"}
        alt=""
        width={400}
        height={300}
      />
      <div className="flex flex-col md:flex-row gap-10 md:gap-3 justify-between items-center relative">
        <div>
          <div className="text-xl md:text-4xl text-center md:text-left font-bold text-[#0E4F94]">
            {Translator.t("company-profile-title", lang)}
          </div>
          <p className="mt-7 text-center md:text-left max-w-3xl text-base">
            {Translator.t("company-profile-desc", lang)}
          </p>
        </div>
        <div>
          <div
            className="bg-[#24AD69] hover:bg-green-700 text-[15px] text-white py-3 px-5 md:py-2 md:px-4 rounded-full cursor-pointer"
          >
            {Translator.t("download", lang)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
