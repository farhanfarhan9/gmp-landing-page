"use client";
import { useState } from 'react';
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Modal from "./Modal";

function CompanyProfile() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  return (
    <div className="md:mx-auto mx-4 md:max-w-7xl rounded-3xl px-8 md:px-16 py-20 my-7 shadow-md bg-gradient-to-b from-[#DFF5FF] to-white relative overflow-hidden mt-10">
      <Image
        className="absolute bottom-0 right-0"
        src={"/img/home/companyprofilebg.png"}
        alt=""
        width={400}
        height={300}
      />
      <div className="relative flex flex-col items-center justify-between gap-10 md:flex-row md:gap-3">
        <div>
          <div className="text-xl md:text-4xl text-center md:text-left font-bold text-[#0E4F94]">
            {Translator.t("company-profile-title", lang)}
          </div>
          <p className="max-w-3xl text-base text-center mt-7 md:text-left">
            {Translator.t("company-profile-desc", lang)}
          </p>
        </div>
        <div>
        <div
            className="bg-[#24AD69] hover:bg-green-700 text-[15px] text-white py-3 px-5 md:py-2 md:px-4 rounded-full cursor-pointer"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            {Translator.t("request", lang)}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> {/* Pass isOpen state and onClose function to Modal */}
    </div>
  );
}

export default CompanyProfile;
