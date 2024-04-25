"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Translator from "@/utils/Translator";
const goodsFactory = () => {
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
            src="/img/project/goods-factory.png"
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
              {Translator.t("gf", lang)}
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-full px-5 xl:px-0">
          <div className="w-full py-20 max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. MARK DYNAMICS INDONESIA, TBK.
              </div>
              <div className="mt-5 text-xl font-extrabold uppercase ">
                Glove Mold Factory
              </div>
              <div className="mt-5 text-base">Tanjung Morawa, Sumut</div>
              <div className="mt-8 text-base">
                Upgrade clarifier and water re-use 30 tons to 100 tons of waste
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. GARUDA TWIN JAYA
              </div>
              <div className="mt-5 text-xl font-extrabold uppercase ">
                Veneer Tape Production & Management
              </div>
              <div className="mt-5 text-base">Tangerang, Banten</div>
              <div className="mt-8 text-base">Maintenance</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. MANDALA SAKTI PERSADA
              </div>
              <div className="mt-5 text-xl font-extrabold uppercase ">
                Paper Production Plant
              </div>
              <div className="mt-5 text-base">Kerinci</div>
              <div className="mt-8 text-base">
                Domestic IPAL For Pallet Project
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default goodsFactory;
