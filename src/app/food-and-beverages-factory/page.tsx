"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const foodAndBeveragesFactory = () => {
  return (
    <div>
      <div className="relative">
        <div style={{ position: "relative" }}>
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full brightness-50"
            src="/img/project/food-factory.png"
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
              Food & Beverages Factory
            </h1>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <div className="py-20 w-full max-w-7xl">
            <div>
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. BUMI SATI PRIMA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Wheat Flour Mill
              </div>
              <div className="text-base mt-5">Siantar, Sumut</div>
              <div className="text-base mt-8">
                Wastewater capacity 200 tons of water per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. SUMATERA BARU
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Coconut Flour Mill
              </div>
              <div className="text-base mt-5">Tanjung Balai, Asahan</div>
              <div className="text-base mt-8">
                Wastewater capacity 100 tons of wastewater per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. MAYORA INDAH, TBK.
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Food & Beverage Factory
              </div>
              <div className="text-base mt-5">Tangerang, Banten</div>
              <div className="text-base mt-8">Wastewater Treatment Plant</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. INDOFOOD SUKSES MAKMUR, TBK.
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Food & Beverage Factory
              </div>
              <div className="text-base mt-5">Jakarta</div>
              <div className="text-base mt-8">
                Blower Installation Waswater Treatment Plant Implementasi
                Oil-Water
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. SRI MAKMUR ABADI
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Coconut Flour Mill
              </div>
              <div className="text-base mt-5">Air Batu, Asahan</div>
              <div className="text-base mt-8">
                Wastewater capacity 100 tons of wastewater per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. GUNUNG MAS GIOK LIE
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Dry Noodle Factory
              </div>
              <div className="text-base mt-5">Tanjung Morawa, Sumut</div>
              <div className="text-base mt-8">
                Wastewater capacity 5 tons of wastewater per day
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. MONDE MAHKOTA SEJAHTERA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Biscuit Production
              </div>
              <div className="text-base mt-5">Jakarta</div>
              <div className="text-base mt-8">Maintenance</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. KILANG MIE GUNUNG MAS
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Noodle Factory
              </div>
              <div className="text-base mt-5">Tanjung Morawa, Sumut</div>
              <div className="text-base mt-8">Filter Media and Pump Change</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. PAHALA BAHARI NUSANTARA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Tuna Fish Products Company
              </div>
              <div className="text-base mt-5">Cikarang</div>
              <div className="text-base mt-8">Maintenance</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. PAHALA SUKSES BERSAMA
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Flour Mill
              </div>
              <div className="text-base mt-5">Cikande, Banten</div>
              <div className="text-base mt-8">
                WWTP System MBR (Membrane Bio Reactor)
              </div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. DELLIFOOD SENTOSA CORPINDO
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Food and Beverage Company
              </div>
              <div className="text-base mt-5">Tanggerang</div>
              <div className="text-base mt-8">Wastewater Treatment Plant</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />

            <div className="mt-10">
              <div className="text-[#0E4F94] uppercase font-extrabold text-3xl">
                PT. NUANSA PEDAS MAKMUR
              </div>
              <div className=" uppercase font-extrabold text-xl mt-5">
                Packaged Food Processing
              </div>
              <div className="text-base mt-5">Kapuk Karta Barat</div>
              <div className="text-base mt-8">Wastewater Treatment Plant</div>
            </div>
            <hr className="mt-10 border-[#DFF5FF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default foodAndBeveragesFactory;
