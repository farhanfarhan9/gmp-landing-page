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
    <div className="py-5 mt-5 md:py-10 md:mt-10" id="product">
      <div className="text-xl md:text-4xl font-bold text-[#098AD2] text-center">
        {Translator.t("product-services", lang)}
      </div>
      <div className="flex justify-center py-3 mx-auto text-xl mt-7 max-w-7xl">
        <div
          className={`text-center text-sm md:text-base pb-5 border-b-4 font-bold text-[#B3B3B3] px-14 cursor-pointer ${
            activeservice === 0 && "!text-black border-[#098AD2]"
          }`}
          onClick={() => setactiveservice(0)}
        >
          {Translator.t("within-city", lang)}
        </div>
        <div
          className={`text-center text-sm md:text-base pb-5 border-b-4 font-bold text-[#B3B3B3] px-14 cursor-pointer ${
            activeservice === 1 && "!text-black border-[#098AD2]"
          }`}
          onClick={() => setactiveservice(1)}
        >
          {Translator.t("suburb", lang)}
        </div>
      </div>
      <div className="flex px-2 mx-auto md:max-w-7xl md:px-0">
        {activeservice === 0 ? (
          // <div className="grid w-full grid-cols-9 gap-5 p-2 border-2 border-[#B3B3B3] rounded-xl">
          //   <div className="w-full text-[#098AD2] my-auto text-base md:text-xl font-semibold text-center">
          //     PRODUCT
          //   </div>
          //   <div className="col-span-8 rounded-lg p-4 bg-gradient-to-r from-[#05476C] to-[#098AD2] grid grid-cols-8">
          //     <div className="w-full my-auto text-center text-white">
          //       Pharmacy/ Hospital
          //     </div>
          //     <div className="w-full my-auto text-center text-white">
          //       Drug Store
          //     </div>
          //     <div className="w-full my-auto text-center text-white">
          //       Modern Trade
          //     </div>
          //     <div className="w-full my-auto text-center text-white">
          //       General Trade
          //     </div>
          //     <div className="w-full my-auto text-center text-white">Salon</div>
          //     <div className="w-full my-auto text-center text-white">
          //       Workshop
          //     </div>
          //     <div className="w-full my-auto text-center text-white">
          //       Hospitality
          //     </div>
          //     <div className="w-full my-auto text-center text-white">
          //       Electrical Store
          //     </div>
          //   </div>
          //   <div className="grid grid-cols-9 col-span-9 pb-2 border-b-2 border-[#B3B3B3]">
          //     <div className="w-full my-auto text-base font-semibold text-center">
          //       PHARMACEUTICAL/ HEALTH EQUIPMENT
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       Same Day Services
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       Same Day Services
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours (according to purchase orders)
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">-</div>
          //     <div className="w-full my-auto text-base text-center">-</div>
          //     <div className="w-full my-auto text-base text-center">-</div>
          //   </div>
          //   <div className="grid grid-cols-9 col-span-9 pb-2 border-b-2 border-[#B3B3B3]">
          //     <div className="w-full my-auto text-base font-semibold text-center">
          //       CONSUMER GOODS & COSMETICS
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours (according to purchase orders)
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //   </div>
          //   <div className="grid grid-cols-9 col-span-9 pb-2">
          //     <div className="w-full my-auto text-base font-semibold text-center">
          //       FOOD & BEVERAGES
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours (according to purchase orders)
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">
          //       2 x 24 Hours
          //     </div>
          //     <div className="w-full my-auto text-base text-center">-</div>
          //     <div className="w-full my-auto text-base text-center">-</div>
          //     <div className="w-full my-auto text-base text-center">-</div>
          //   </div>
          // </div>

          <div className="relative w-full overflow-x-auto border-2 border-[#B3B3B3] rounded-xl p-2">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
              <thead className="text-xs uppercase bg-gradient-to-r from-[#05476C] to-[#098AD2] text-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-base font-semibold text-[#098AD2] bg-white "
                  >
                    {Translator.t("product", lang)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-base font-semibold rounded-l-lg"
                  >
                    {Translator.t("hospital", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-semibold">
                    {Translator.t("drug-store", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-semibold">
                    {Translator.t("modern-trade", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-semibold">
                    {Translator.t("general-trade", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-semibold">
                    {Translator.t("horeca", lang)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-base font-semibold rounded-r-lg"
                  >
                    {Translator.t("electrical-store", lang)}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-base bg-white border-b">
                  <th className="px-6 py-4 font-semibold ">
                    PHARMACEUTICAL / HEALTH EQUIPMENT
                  </th>
                  <td className="px-6 py-4">Same Day Services</td>
                  <td className="px-6 py-4">Same Day Services</td>
                  <td className="px-6 py-4">
                    2 x 24 Hours (according to purchase orders)
                  </td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="text-base bg-white border-b">
                  <th className="px-6 py-4 font-semibold">
                    CONSUMER GOODS & COSMETICS
                  </th>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">1 x 24 Hours</td>
                </tr>
                <tr className="text-base bg-white">
                  <th className="px-6 py-4 font-semibold">FOOD & BEVERAGES</th>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="relative w-full overflow-x-auto border-2 border-[#B3B3B3] rounded-xl p-2">
            <table className="w-full text-sm text-left text-gray-500 rtl:text-right ">
              <thead className="text-xs uppercase bg-gradient-to-r from-[#05476C] to-[#098AD2] text-white">
                <tr className="text-base font-semibold">
                  <th
                    scope="col"
                    className="px-6 py-3 text-base font-semibold text-[#098AD2] bg-white"
                  >
                    {Translator.t("product", lang)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-semibold rounded-l-lg"
                  >
                    {Translator.t("hospital", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 font-semibold">
                    {Translator.t("drug-store", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 font-semibold">
                    {Translator.t("modern-trade", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 font-semibold">
                    {Translator.t("general-trade", lang)}
                  </th>
                  <th scope="col" className="px-6 py-3 font-semibold">
                    {Translator.t("horeca", lang)}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-semibold rounded-r-lg"
                  >
                    {Translator.t("electrical-store", lang)}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-base bg-white border-b ">
                  <th className="px-6 py-4 font-semibold">
                    PHARMACEUTICAL / HEALTH EQUIPMENT
                  </th>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">
                    3 x 24 Hours (according to purchase orders)
                  </td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">-</td>
                </tr>
                <tr className="text-base bg-white border-b ">
                  <th className="px-6 py-4 font-semibold">
                    CONSUMER GOODS & COSMETICS
                  </th>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">
                    3 x 24 Hours (according to purchase orders)
                  </td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">-</td>
                  <td className="px-6 py-4">2 x 24 Hours</td>
                </tr>
                <tr className="text-base bg-white">
                  <th className="px-6 py-4 font-semibold">FOOD & BEVERAGES</th>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">
                    3 x 24 Hours (according to purchase orders)
                  </td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">3 x 24 Hours</td>
                  <td className="px-6 py-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectServices;
