"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function ProjectServices() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-5 mt-5 md:py-10 md:mt-10">
      <div className="text-xl md:text-4xl font-bold text-[#098AD2] text-center">
        Product & Services
      </div>
      <div className="flex justify-center py-3 mx-auto text-xl mt-7 max-w-7xl">
        <div
          className={`text-center text-sm md:text-base pb-5 border-b-4 font-bold text-[#B3B3B3] px-14 cursor-pointer ${
            activeservice === 0 && "!text-black border-[#098AD2]"
          }`}
          onClick={() => setactiveservice(0)}
        >
          Within City
        </div>
        <div
          className={`text-center text-sm md:text-base pb-5 border-b-4 font-bold text-[#B3B3B3] px-14 cursor-pointer ${
            activeservice === 1 && "!text-black border-[#098AD2]"
          }`}
          onClick={() => setactiveservice(1)}
        >
          Suburb
        </div>
      </div>
      <div className="flex mx-auto md:max-w-7xl">
        {activeservice === 0 ? (
          <div className="grid w-full grid-cols-9 gap-5 p-2 border-2 border-[#B3B3B3] rounded-xl">
            <div className="w-full text-[#098AD2] my-auto text-base md:text-xl font-semibold text-center">
              PRODUCT
            </div>
            <div className="col-span-8 rounded-lg p-4 bg-gradient-to-r from-[#05476C] to-[#098AD2] grid grid-cols-8">
              <div className="w-full my-auto text-center text-white">
                Pharmacy/ Hospital
              </div>
              <div className="w-full my-auto text-center text-white">
                Drug Store
              </div>
              <div className="w-full my-auto text-center text-white">
                Modern Trade
              </div>
              <div className="w-full my-auto text-center text-white">
                General Trade
              </div>
              <div className="w-full my-auto text-center text-white">Salon</div>
              <div className="w-full my-auto text-center text-white">
                Workshop
              </div>
              <div className="w-full my-auto text-center text-white">
                Hospitality
              </div>
              <div className="w-full my-auto text-center text-white">
                Electrical Store
              </div>
            </div>
            <div className="grid grid-cols-9 col-span-9 pb-2 border-b-2 border-[#B3B3B3]">
              <div className="w-full my-auto text-base font-semibold text-center">
                PHARMACEUTICAL/ HEALTH EQUIPMENT
              </div>
              <div className="w-full my-auto text-base text-center">
                Same Day Services
              </div>
              <div className="w-full my-auto text-base text-center">
                Same Day Services
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours (according to purchase orders)
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">-</div>
            </div>
            <div className="grid grid-cols-9 col-span-9 pb-2 border-b-2 border-[#B3B3B3]">
              <div className="w-full my-auto text-base font-semibold text-center">
                CONSUMER GOODS & COSMETICS
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours (according to purchase orders)
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
            </div>
            <div className="grid grid-cols-9 col-span-9 pb-2">
              <div className="w-full my-auto text-base font-semibold text-center">
                FOOD & BEVERAGES
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours (according to purchase orders)
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">-</div>
            </div>
          </div>
        ) : (
          <div className="grid w-full grid-cols-9 gap-5 p-2 border-2 border-[#B3B3B3] rounded-xl">
            <div className="w-full text-[#098AD2] my-auto text-base md:text-xl font-semibold text-center">
              PRODUCT
            </div>
            <div className="col-span-8 rounded-lg p-4 bg-gradient-to-r from-[#05476C] to-[#098AD2] grid grid-cols-8">
              <div className="w-full my-auto text-center text-white">
                Pharmacy/ Hospital
              </div>
              <div className="w-full my-auto text-center text-white">
                Drug Store
              </div>
              <div className="w-full my-auto text-center text-white">
                Modern Trade
              </div>
              <div className="w-full my-auto text-center text-white">
                General Trade
              </div>
              <div className="w-full my-auto text-center text-white">Salon</div>
              <div className="w-full my-auto text-center text-white">
                Workshop
              </div>
              <div className="w-full my-auto text-center text-white">
                Hospitality
              </div>
              <div className="w-full my-auto text-center text-white">
                Electrical Store
              </div>
            </div>
            <div className="grid grid-cols-9 col-span-9 pb-2 border-b-2 border-[#B3B3B3]">
              <div className="w-full my-auto text-base font-semibold text-center">
                PHARMACEUTICAL/ HEALTH EQUIPMENT
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours (according to purchase orders)
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">-</div>
            </div>
            <div className="grid grid-cols-9 col-span-9 pb-2 border-b-2 border-[#B3B3B3]">
              <div className="w-full my-auto text-base font-semibold text-center">
                CONSUMER GOODS & COSMETICS
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours (according to purchase orders)
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">
                2 x 24 Hours
              </div>
            </div>
            <div className="grid grid-cols-9 col-span-9 pb-2">
              <div className="w-full my-auto text-base font-semibold text-center">
                FOOD & BEVERAGES
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours (according to purchase orders)
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">-</div>
              <div className="w-full my-auto text-base text-center">
                3 x 24 Hours
              </div>
              <div className="w-full my-auto text-base text-center">-</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectServices;
