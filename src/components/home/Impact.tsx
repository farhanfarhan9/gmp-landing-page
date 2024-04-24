"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const additionalValuePerDay = 4090;

const Impact = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const startDate = new Date("06/21/2023 00:00:00");
      const currentDate = new Date();
      const elapsedTime = currentDate.getTime() - startDate.getTime();
      const totalDays = Math.floor(elapsedTime / millisecondsPerDay);
      const additionalValue = totalDays * additionalValuePerDay;

      const storedValue = localStorage.getItem("counterValue");

      if (storedValue) {
        setValue(parseFloat(storedValue));
      } else {
        setValue(1783605 + additionalValue);
      }

      const interval = setInterval(() => {
        setValue((prevValue) => {
          const newValue =
            prevValue + additionalValuePerDay / millisecondsPerDay;
          localStorage.setItem("counterValue", newValue.toString());
          return newValue;
        });
      }, 1);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);
  return (
    <div
      className="mx-auto w-[800px] bg-opacity-50 p-10 -mt-28 absolute top-0 left-1/2 -translate-x-1/2 rounded-2xl overflow-hidden bg-left bg-cover shadow-md"
      style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-white opacity-50"></div>
      <div className="relative">
        <div className="text-[#0E4F94] text-5xl font-bold text-center">
        {Translator.t("our-impact", lang)}
        </div>
        <div className="flex mt-5 mx-9 justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/img/home/impact1.png"
              alt=""
              width={100}
              height={100}
            />
            <div>
              <div className="text-[#0E4F94] font-bold text-3xl">29+</div>
              <div className="mt-3">Projects</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Image src="/img/home/impact2.png" alt="" width={60} height={100} />
            <div>
              <div className="text-[#0E4F94] font-bold text-3xl">
                <div className="flex gap-1">
                  <div className="w-[220px]">
                    {value.toLocaleString(undefined, {
                      minimumFractionDigits: 3,
                    })}
                  </div>
                  <div className="text-superscript">
                    m<sup>3</sup>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                {Translator.t("conserved-water", lang)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
