import Image from "next/image";
import React from "react";

function CompanyJourney() {
  return (
    <div className="bg-[#0E4F94] mb-4 pt-10 pb-16">
      <div className="text-6xl font-bold text-white text-center">
        Company Journey
      </div>
      <div className="max-w-7xl mx-auto mt-12">
       <Image src={"/img/about/timeline.svg"} alt="" width={1497} height={599} />
      </div>
    </div>
  );
}

export default CompanyJourney;
