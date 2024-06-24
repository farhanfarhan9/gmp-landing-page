"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function TotalEmployee() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-10 mt-10 space-y-10 md:space-y-20 md:mx-auto md:max-w-7xl">
      <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center">
        Total Employee
      </div>
      <div className="flex flex-col justify-center gap-10 md:flex-row">
        <div className="flex flex-col items-center space-y-2 text-black md:space-y-5">
          <Image
            src={"/img/home/400.png"}
            className="object-scale-down w-fit h-30 md:h-72"
            alt=""
            width={40}
            height={40}
          />
          <p className="text-base font-semibold md:text-xl">People</p> 
          <h2 className="text-lg font-semibold md:text-3xl">Number of Employees</h2>
        </div>
        <div className="flex flex-col items-center space-y-2 text-black md:space-y-5">
          <Image
            src={"/img/home/150.png"}
            className="object-scale-down w-fit h-30 md:h-72"
            alt=""
            width={40}
            height={40}
          />
          <p className="text-base font-semibold md:text-xl">People</p> 
          <h2 className="text-lg font-semibold md:text-3xl">Sales Force</h2>
        </div>
      </div>
    </div>
  );
}

export default TotalEmployee;
