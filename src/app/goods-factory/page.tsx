"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const goodsFactory = () => {
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
              Goods Factory
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center px-5 xl:px-0">
          <div className="py-20 w-full max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. MARK DYNAMICS INDONESIA, TBK.
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Glove Mold Factory
              </div>
              <div className="text-base mt-5">Tanjung Morawa, Sumut</div>
              <div className="text-base mt-8">
                Upgrade clarifier and water re-use 30 tons to 100 tons of waste
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. GARUDA TWIN JAYA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Veneer Tape Production & Management
              </div>
              <div className="text-base mt-5">Tangerang, Banten</div>
              <div className="text-base mt-8">Maintenance</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. MANDALA SAKTI PERSADA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Paper Production Plant
              </div>
              <div className="text-base mt-5">Kerinci</div>
              <div className="text-base mt-8">
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
