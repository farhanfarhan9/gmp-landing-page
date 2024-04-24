"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

function Advantages() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="relative text-base">
      <div className="flex w-[2000px] max-w-7xl absolute top-0 left-1/2 -translate-x-1/2 -mt-36 rounded-3xl shadow-md overflow-hidden">
        <div className="w-1/2 bg-[#EDF2F5] py-10 px-12">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/img/icons/vision.png"}
              width={50}
              height={50}
              alt=""
            />
            <div className="text-4xl text-[#0E4F94] font-bold">{Translator.t("vision", lang)}</div>
          </div>
          <div className="mt-5">
            Leading wastewater engineering company with complete set of
            operational capabilities nationwide for water conservations, reuse,
            and renewable energy.
          </div>
        </div>
        <div className="w-1/2 bg-[#DFF5FF] py-10 px-12">
          <div className="flex items-center justify-center gap-3">
            <Image
              src={"/img/icons/mission.png"}
              width={50}
              height={50}
              alt={""}
            />
            <div className="text-4xl text-[#0E4F94] font-bold">{Translator.t("mission", lang)}</div>
          </div>
          <div className="mt-5">
            <ul className="list-disc">
              <li>
                Research and Development on wastewater technology that is
                directed to renewable energy.
              </li>
              <li>
                Production facilities and tech partnerships on membrane
                technologies.
              </li>
              <li>
                Deployment of AIoT for data-driven wastewater management system.
              </li>
              <li>Engineering Excellence and Compliances.</li>
              <li>Network of technicians nationwide.</li>
            </ul>
          </div>
        </div>
      </div>
      <Image
        src="/img/about/adventagebg1.png"
        width={2000}
        height={800}
        alt=""
      />
      <div className="absolute top-1/2 bottom-0 right-0 left-0">
        <div className="text-5xl font-bold text-white text-center">
          Our Advantages
        </div>
        <div className="text-white grid grid-cols-2 gap-7 mt-10 max-w-7xl mx-auto">
          <div>
            <ul className="list-disc">
              <li>Led by experts in the waste water sector.</li>
              <li>
                Experienced in the industrial and machinery fields for more than
                30 years.
              </li>
              <li>Has a special waste processing laboratory.</li>
              <li>
                We guarantee that all projects achieve quality standards in
                accordance with government regulations.
              </li>
            </ul>
          </div>
          <div>
            <ul className="list-disc">
              <li>Distributor of electromechanical equipment and pumps.</li>
              <li>Customer satisfaction as a priority.</li>
              <li>
                Our products and services combine the advantages of the latest
                technology with a deep understanding of your needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
