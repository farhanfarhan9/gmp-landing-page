"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const millisecondsPerDay = 24 * 60 * 60 * 1000;
const additionalValuePerDay = 4090;

const Section1 = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
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
        const newValue = prevValue + additionalValuePerDay / millisecondsPerDay;
        localStorage.setItem("counterValue", newValue.toString());
        return newValue;
      });
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section className="relative" id="impact">
        <Image
          width={100}
          height={100}
          unoptimized
          src="/img/home/impactfoto.png"
          className="w-full"
          alt=""
        />
        <div className="absolute top-0 bottom-0 right-0 left-0">
          <div className="h-full flex items-center justify-start text-white max-w-7xl">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-auto">
              Sustainability Starts <br />
              from Reliable Engineering
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 left-0 border-t-4 bg-blue-800 bg-opacity-50 border-blue-900 text-white">
          <div className="h-full flex ml-8 justify-center py-2 md:py-5">
            <span>
              <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl underline">Our Impact</h2>
              <div className="flex items-center justify-start text-xl md:text-2xl lg:text-4xl xl:text-5xl">
                Conserved Water:
                <div className="flex items-center">
                  <div className="bg-stone-100 bg-opacity-40 rounded-xl px-3 py-1 mx-2 font-mono">
                    {value.toLocaleString(undefined, {
                      minimumFractionDigits: 3,
                    })}
                  </div>
                  <div className="text-superscript">
                    m<sup>3</sup>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
