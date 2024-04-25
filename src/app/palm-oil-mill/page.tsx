"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";

const plamOilMill = () => {
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
            src="/img/project/palm-oil-mill.png"
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
              {Translator.t("palm-oil", lang)}
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center px-5 xl:px-0">
          <div className="py-20 w-full max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. INDOWANGI NUSANTARA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Patchouli Oil Distillation Plant
              </div>
              <div className="text-base mt-5">KIM, Medan</div>
              <div className="text-base mt-8">
                Wastewater capacity 10 tons of wastewater per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                CV. AROMA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Patchouli Oil Distillation Plant
              </div>
              <div className="text-base mt-5">KIM, Medan</div>
              <div className="text-base mt-8">
                Wastewater capacity 10 tons of wastewater per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. BUANA WIRASUBUR SAKTI
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Palm Oil Mill
              </div>
              <div className="text-base mt-5">East Kalimantan</div>
              <div className="text-base mt-8">
                Wastewater capacity 5 tons of wastewater per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                ASTRA GROUP
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Palm Oil Mill
              </div>
              <div className="text-base mt-5">Deli Serdang</div>
              <div className="text-base mt-8">
                Reducing siltation & Improving Anaerobic & Aerobic
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. SAWIT JAYA MAKMUR SENTOSA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Palm Oil Mill
              </div>
              <div className="text-base mt-5">Langkat, Sumut</div>
              <div className="text-base mt-8">
                Reducing siltation & Improving Anaerobic & Aerobic
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. ANGSO DUO SAWIT
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Palm Oil Mill
              </div>
              <div className="text-base mt-5">Jambi</div>
              <div className="text-base mt-8">
                Reducing siltation & Improving Anaerobic & Aerobic
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. TOBA PULP LESTARI, TBK.
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Palm Oil Mill
              </div>
              <div className="text-base mt-5">Toba Samosir, Sumut</div>
              <div className="text-base mt-8">
                Implementasi Instalasi Pengolahan Limbah
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. SUMBER JAYA INDUSTRI OLEO
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Palm Oil Mill
              </div>
              <div className="text-base mt-5">Pelintung Dumai, Riau</div>
              <div className="text-base mt-8">
                Waswater Treatment Plant - Equipments & Panel
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default plamOilMill;
