"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";

const PowerPlant = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div>
      <div className="relative">
        <div style={{ position: "relative" }}>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full brightness-50"
            src="/img/project/powerplant.png"
            alt=""
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <h1 style={{ color: "white" }} className="text-5xl font-extrabold">
              {Translator.t("pp", lang)}
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center px-5 xl:px-0">
          <div className="py-20 w-full max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PLTU BANJARSARI 2X 135 MW
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Steam Power Plant
              </div>
              <div className="text-base mt-5">Lahat, Sumsel</div>
              <div className="text-base mt-8">System (OWS)</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. RAJA VOLTAMA ELECTRIC
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                State Electricity Company (PLN)
              </div>
              <div className="text-base mt-5">Muara Enim, Sumsel</div>
              <div className="text-base mt-8">
                Normalization of Oily Water Separator (OWS) System
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PLTU BANJARSARI 2X 135 MW
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Steam Power Plant
              </div>
              <div className="text-base mt-5">Lahat, Sumut</div>
              <div className="text-base mt-8">Oil Water Separator Project</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. GUNBUSTER NICKEL INDUSTRY
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Nickel Ore Processing
              </div>
              <div className="text-base mt-5">Central Sulawesi</div>
              <div className="text-base mt-8">
                Construction of Sawege Treatment Plant
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPlant;
