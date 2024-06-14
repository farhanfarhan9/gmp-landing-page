"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Outlets() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-10 mt-10 md:mx-auto md:max-w-7xl">
      <div className="flex">
        <div className="md:my-auto md:w-1/3">
          <div className="text-4xl font-semibold text-[#098AD2] text-left">
            Number of Outlets
          </div>
          <p className="text-3xl font-medium">*as per 2023</p>
        </div>
        <Image
          className="md:w-2/3"
          src={"/img/home/outlets.png"}
          alt=""
          width={700}
          height={300}
        />
      </div>
    </div>
  );
}

export default Outlets;
