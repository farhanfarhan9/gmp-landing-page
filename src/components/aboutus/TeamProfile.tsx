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
        </div>
      ),
    },
    {
      name: "Antony Simon, B.Sc., M.Kom.",
      role: "Operatational Director",
      image: "/img/about/antony.png",
      desc: (
        <div>
          {Translator.t("profile-antony", lang)}
        </div>
      ),
    },
    {
      name: "Ir. Anton Suherman",
      role: "Technical Director",
      image: "/img/about/anton.png",
      desc: (
        <div>
          {Translator.t("profile-anton", lang)}
        </div>
      ),
    },
    {
      name: "Joshua Alexander Arief B.Eng",
      role: "Engineering Director",
      image: "/img/about/joshua.png",
      desc: (
        <div>
          <div>
            {Translator.t("profile-joshua-1", lang)}
          </div>
          <div className="mt-4">
            {Translator.t("profile-joshua-2", lang)}
          </div>
        </div>
      ),
    },
  ];
  const [activeProfile, setactiveProfile] = useState(0);
  return (
    <div className="">
      <div className="mx-auto max-w-7xl flex min-h-[800px] mt-20">
        <div className="w-6/12 pr-8">
          <div className="text-5xl font-bold text-[#0E4F94]">{Translator.t("team-profile", lang)}</div>
          <div className="text-4xl font-bold text-[#0E4F94] mt-5">
            {ProfileData[activeProfile].name}
          </div>
          <div className="font-semibold mt-4">
            {ProfileData[activeProfile].role}
          </div>
          <div className="mt-7 text-base">
            {ProfileData[activeProfile].desc}
          </div>
        </div>
        <div className="flex gap-2 w-6/12 mt-32">
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
