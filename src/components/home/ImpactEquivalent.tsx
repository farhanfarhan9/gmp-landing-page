"use client";
import Image from "next/image";
import React from "react";
import Tooltip from "../Hover/Tooltips";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";

function ImpactEquivalent({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <div className="mx-auto w-[800px] relative mt-9 pb-6">
      <div className="text-[#0E4F94] text-2xl text-center">Equivalent to:</div>

      <div className="mt-5 grid grid-cols-2 gap-8 ">
        <div
          className="bg-opacity-50 relative p-5 rounded-2xl bg-left bg-cover shadow-md"
          style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
        >
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-50"></div>
          <div className="relative">
            <div className="text-2xl font-semibold text-center">
              Access to Clean Water for:
            </div>
            <div className="flex gap-5 mt-5 justify-center items-center">
              <Image
                src={"/img/home/home.png"}
                alt=""
                width={100}
                height={100}
              />
              <div>
                <div className="text-[#0E4F94] font-bold text-3xl">
                  {(total / 1000).toLocaleString(undefined, {
                    minimumFractionDigits: 3,
                  })}
                </div>
                <div className="mt-3 font-bold">Households</div>
              </div>
            </div>
          </div>
          <div className="absolute right-2 bottom-2 z-10">
            <Tooltip content={Translator.t("tooltips-1", lang)}>
              <svg
                className=" feather feather-alert-circle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </Tooltip>
          </div>
        </div>
        <div
          className="bg-opacity-50 relative p-5 rounded-2xl bg-left bg-cover shadow-md"
          style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
        >
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-50"></div>

          <div className="relative">
            <div className="text-2xl font-semibold text-center">
              Access to Clean Water for:
            </div>
            <div className="flex gap-5 mt-5 justify-center items-center">
              <Image
                src={"/img/home/people.png"}
                alt=""
                width={70}
                height={70}
              />
              <div>
                <div className="text-[#0E4F94] font-bold text-3xl">
                  {((total / 1000) * 5).toLocaleString(undefined, {
                    minimumFractionDigits: 3,
                  })}
                </div>
                <div className="mt-3 font-bold">People</div>
              </div>
            </div>
          </div>
          <div className="absolute right-2 bottom-2 z-10">
            <Tooltip content={Translator.t("tooltips-2", lang)}>
              <svg
                className=" feather feather-alert-circle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImpactEquivalent;
