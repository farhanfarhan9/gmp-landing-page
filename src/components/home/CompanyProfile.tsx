import Image from "next/image";
import React from "react";

function CompanyProfile() {
  return (
    <div className="mx-auto max-w-7xl rounded-3xl border-8 p-10 my-7 bg-gradient-to-b from-[#DFF5FF] to-white relative overflow-hidden">
      <Image
        className="absolute right-0 bottom-0"
        src={"/img/home/companyprofilebg.png"}
        alt=""
        width={370}
        height={270}
      />
      <div className="flex justify-between items-center relative">
        <div>
          <div className="text-4xl font-bold text-[#0E4F94]">
            Company Profile
          </div>
          <p className="mt-7 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            malesuada elit nec quam interdum, non suscipit lorem varius. Sed ac
            volutpat elit. Morbi egestas, orci eget vulputate feugiat, magna
            lectus luctus lectus, id bibendum lacus tortor accumsan nulla. Morbi
            ut consequat tortor.
          </p>
        </div>
        <div>
          <button className="bg-[#24AD69] text-[15px] text-white py-2 px-4 rounded-full">
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
