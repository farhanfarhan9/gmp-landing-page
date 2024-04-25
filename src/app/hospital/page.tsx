"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const hospital = () => {
  return (
    <div>
      <div className="relative">
        <div style={{ position: "relative" }}>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full brightness-50"
            src="/img/project/hospital.png"
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
              Hospital
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-center px-5 xl:px-0">
          <div className="py-20 w-full max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. RUMAH SAKIT UMUM KASIH PERMATA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Hospital
              </div>
              <div className="text-base mt-5">Batubara, Sumut</div>
              <div className="text-base mt-8">
                Wastewater Treatment Plant (WWTP)
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hospital;
