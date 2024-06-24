"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function WarehouseFacility() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="px-2 py-5 mt-5 md:py-10 md:mt-10 md:mx-auto md:max-w-7xl md:px-0">
      <div className="text-xl md:hidden md:text-4xl font-semibold text-[#098AD2] text-center">
        Warehouse Facilities
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col w-3/4 mx-auto my-auto md:mx-0">
          <div className="text-4xl hidden md:block font-semibold text-[#098AD2] text-left">
            Warehouse Facilities
          </div>
          <div className="grid grid-cols-1 gap-5 mx-auto mt-5 md:gap-10 md:mt-10 md:grid-cols-2 md:mx-0">
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w1.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Racking System</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w5.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Pharmaceutical Warehouse CDOB Standard</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w2.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Reach Trucks and Warehouse Equipment Support</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w6.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Has temperature control {'<30°'}, {'25°'}, {'<8°'}</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w3.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Separated Warehouse for bad stock/ED handling</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w7.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Separated Warehouse for Special Handling Product</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w4.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Special Handling Location for Near ED product</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w8.png"}
                className="object-scale-down w-10 h-10 md:w-fit md:h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-base font-semibold text-black md:text-xl">Pest Control</p>
            </div>
          </div>
        </div>
        <Image
          className="hidden md:block"
          src={"/img/home/warehouse.png"}
          alt=""
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}

export default WarehouseFacility;
