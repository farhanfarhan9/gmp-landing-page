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
    <div className="py-10 mt-10 md:mx-auto md:max-w-7xl">
      <div className="flex gap-5">
        <div className="flex flex-col w-3/4 my-auto">
          <div className="text-4xl font-semibold text-[#098AD2] text-left">
            Warehouse Facilities
          </div>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w1.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Racking System</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w5.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Pharmaceutical Warehouse CDOB Standard</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w2.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Reach Trucks and Warehouse Equipment Support</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w6.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Has temperature control {'<30°'}, {'25°'}, {'<8°'}</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w3.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Separated Warehouse for bad stock/ED handling</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w7.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Separated Warehouse for Special Handling Product</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w4.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Special Handling Location for Near ED product</p>
            </div>
            <div className="flex w-full gap-8">
              <Image
                src={"/img/home/w8.png"}
                className="w-fit h-fit"
                alt=""
                width={40}
                height={40}
              />
              <p className="my-auto text-xl font-semibold text-black">Pest Control</p>
            </div>
          </div>
        </div>
        <Image
          className=""
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
