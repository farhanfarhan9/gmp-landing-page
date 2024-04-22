"use client";

import Image from "next/image";

function OurService() {
  return (
    <div className="py-10 mt-10">
      <div className="text-5xl font-bold text-[#0E4F94] text-center">
        Our Services
      </div>
      <p className="text-center mx-auto w-[880px] mt-7">
        Satria Nusa Engineering is committed to supporting industrial growth by
        maintaining environmental balance. With electro-mechanical, civil &
        chemical engineering experience, we provide a perfect level of success
        to our clients in terms of managing production wastewater (wastewater
        treatment) & domestic wastewater (sewage treatment).
      </p>
      <div className="flex justify-center py-3 border-b-2 gap-20 text-3xl mt-7 mx-auto max-w-7xl">
        <div className="text-center font-bold text-[#0E4F94]">
          Waste Technology <br />& Environment
        </div>
        <div className="text-center">
          Civil & <br /> Fabrication
        </div>
        <div className="text-center">
          Mechanical & <br /> Electrical
        </div>
        <div className="text-center">
          Environmental <br /> Permitting
        </div>
      </div>

      <div className="mx-auto w-[880px] flex gap-12 justify-between items-center mt-12">
        <div className="">
          <Image
            src={"/img/home/service1.png"}
            alt=""
            width={600}
            height={600}
          />
        </div>
        <div>
          <div className="text-3xl text-[#0E4F94] font-bold">Waste Technology & Environment</div>
          <div className="mt-7">
            Satria Nusa Engineering is a national wastewater management company
            that has successfully implemented the latest technology in water and
            wastewater technology.
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
