"use client";
import Image from "next/image";
import React from "react";

function CompanyProfile() {
  return (
    <div className="mx-auto max-w-7xl rounded-3xl border-8 px-16 py-20 my-7 bg-gradient-to-b from-[#DFF5FF] to-white relative overflow-hidden mt-10">
      <Image
        className="absolute right-0 bottom-0"
        src={"/img/home/companyprofilebg.png"}
        alt=""
        width={400}
        height={300}
      />
      <div className="flex justify-between items-center relative">
        <div>
          <div className="text-4xl font-bold text-[#0E4F94]">
            Company Profile
          </div>
          <p className="mt-7 max-w-3xl text-base">
            Download our Company Profile to learn more about our company,
            including our vision and mission, project portfolio and
            certifications.
          </p>
        </div>
        <div>
          <a
            href="/docs/Compro SNE 2024.pdf"
            className="bg-[#24AD69] hover:bg-green-700 text-[15px] text-white py-2 px-4 rounded-full"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
