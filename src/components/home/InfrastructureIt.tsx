"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function InfrastructureIt() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-10 mt-10 space-y-10">
      <div className="text-4xl font-semibold text-[#098AD2] text-center flex justify-between gap-5">
        <Image
          className=""
          src={"/img/home/infoleft.png"}
          alt=""
          width={400}
          height={300}
        />
        <div className="flex flex-col my-auto space-y-10">
          <div className="flex justify-center gap-4">
            <span className="border-r-4 border-[#098AD2] pr-5 ">
              Infrastructure
            </span>
            <span>IT</span>
          </div>
          <div className="px-4 mx-auto py-2 w-fit border border-[#098AD2] bg-[#D9F1FF] rounded-full">
            <p className="text-xl font-semibold text-[#098AD2]">
              SFA to salesman
            </p>
          </div>
          <div className="px-4 mx-auto py-2 w-fit border border-[#098AD2] bg-[#D9F1FF] rounded-full">
            <p className="text-xl font-semibold text-[#098AD2]">
              Back to back interfacing IT system
            </p>
          </div>
        </div>
        <Image
          className=""
          src={"/img/home/inforight.png"}
          alt=""
          width={400}
          height={300}
        />
      </div>
    </div>
  );
}

export default InfrastructureIt;
