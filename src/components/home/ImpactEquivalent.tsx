import Image from "next/image";
import React from "react";

function ImpactEquivalent({ total }: { total: number }) {
  return (
    <div className="mx-auto w-[800px] overflow-hidden relative mt-9">
      <div className="text-[#0E4F94] text-2xl text-center">Equivalent to:</div>

      <div className="mt-5 grid grid-cols-2 gap-8 ">
        <div
          className="bg-opacity-50 p-5 rounded-2xl overflow-hidden bg-left bg-cover shadow-md"
          style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
        >
          <div className="text-2xl font-semibold text-center">
            Access to Clean Water for:
          </div>
          <div className="flex gap-5 mt-5 justify-center items-center">
            <Image src={"/img/home/home.png"} alt="" width={100} height={100} />
            <div>
              <div className="text-[#0E4F94] font-bold text-3xl">
                {(total / 1000).toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                })}
              </div>
              <div className="mt-3">Households</div>
            </div>
          </div>
        </div>
        <div
          className="bg-opacity-50 p-5 rounded-2xl overflow-hidden bg-left bg-cover shadow-md"
          style={{ backgroundImage: 'url("/img/home/bg-impact.webp")' }}
        >
          <div className="text-2xl font-semibold text-center">
            Access to Clean Water for:
          </div>
          <div className="flex gap-5 mt-5 justify-center items-center">
            <Image src={"/img/home/people.png"} alt="" width={70} height={70} />
            <div>
              <div className="text-[#0E4F94] font-bold text-3xl">
                {(total / (1000*5)).toLocaleString(undefined, {
                  minimumFractionDigits: 3,
                })}
              </div>
              <div className="mt-3">People</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ImpactEquivalent;
