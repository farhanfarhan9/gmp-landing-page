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
    <div className="py-10 mt-10 space-y-10 md:mx-auto md:max-w-7xl">
      <div className="text-4xl font-semibold text-[#098AD2] text-center">
        Sales Productivity
      </div>
      <div className="flex justify-center gap-10">
        <div className="flex flex-col items-center space-y-5 text-black">
          <Image
            src={"/img/home/400.png"}
            className="w-fit h-72"
            alt=""
            width={40}
            height={40}
          />
          <p className="text-xl font-semibold">People</p> 
          <h2 className="text-3xl font-semibold">Number of Employees</h2>
        </div>
        <div className="flex flex-col items-center space-y-5 text-black">
          <Image
            src={"/img/home/150.png"}
            className="w-fit h-72"
            alt=""
            width={40}
            height={40}
          />
          <p className="text-xl font-semibold">People</p> 
          <h2 className="text-3xl font-semibold">Sales Force</h2>
        </div>
      </div>
    </div>
  );
}

export default TotalEmployee;
