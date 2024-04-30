"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function TeamProfile() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const ProfileData = [
    {
      name: "Feli Zulhendri, M.Sc.",
      role: "Managing Director",
      image: "/img/about/feli.png",
      desc: (
        <div>
          <div>{Translator.t("profile-feli-1", lang)}</div>
          <div className="mt-4">{Translator.t("profile-feli-2", lang)}</div>
          <div className="mt-4">{Translator.t("profile-feli-3", lang)}</div>
        </div>
      ),
    },
    {
      name: "Antony Simon, B.Sc., M.Kom.",
      role: "Operational Director",
      image: "/img/about/antony.png",
      desc: (
        <div>
          <div>{Translator.t("profile-antony-1", lang)}</div>
          <div className="mt-4">{Translator.t("profile-antony-2", lang)}</div>
          <div className="mt-4">{Translator.t("profile-antony-3", lang)}</div>
        </div>
      ),
    },
    {
      name: "Ir. Anton Suherman, B.Eng",
      role: "Technical Director",
      image: "/img/about/anton.png",
      desc: (
        <div>
          <div>{Translator.t("profile-anton-1", lang)}</div>
          <div className="mt-4">{Translator.t("profile-anton-2", lang)}</div>
        </div>
      ),
    },
    {
      name: "Joshua Alexander Arief B.Eng",
      role: "Engineering Director",
      image: "/img/about/joshua.png",
      desc: (
        <div>
          <div>{Translator.t("profile-joshua-1", lang)}</div>
          <div className="mt-4">{Translator.t("profile-joshua-2", lang)}</div>
        </div>
      ),
    },
  ];
  const [activeProfile, setactiveProfile] = useState(0);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-12 md:px-0 flex md:flex-row flex-col min-h-[800px] mt-20">
        <div className="text-5xl font-bold text-[#0E4F94] block md:hidden">
          {Translator.t("team-profile", lang)}
        </div>
        <div className="order-2 w-full md:w-6/12 md:pr-8 md:order-1">
          <div className="text-5xl font-bold text-[#0E4F94] md:block hidden">
            {Translator.t("team-profile", lang)}
          </div>
          <div className="text-4xl font-bold text-[#0E4F94] mt-5">
            {ProfileData[activeProfile].name}
          </div>
          <div className="mt-4 font-semibold">
            {ProfileData[activeProfile].role}
          </div>
          <div className="text-base mt-7">
            {ProfileData[activeProfile].desc}
          </div>
        </div>
        <div className="flex order-1 w-full gap-2 mt-10 mb-10 md:mb-0 md:mt-32 md:w-6/12 md:order-2">
          {ProfileData.map((data, index) => (
            <div
              onClick={() => setactiveProfile(index)}
              className={`relative rounded-xl cursor-pointer transition-all duration-300 overflow-hidden h-[390px] ${
                activeProfile === index ? "w-6/12" : "w-2/12"
              }`}
              key={index}
            >
              <Image
                className={`h-full w-full object-cover ${
                  activeProfile !== index && "grayscale"
                }`}
                src={data.image}
                alt=""
                width={240}
                height={432}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamProfile;
