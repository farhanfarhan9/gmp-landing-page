"use client";
import Image from "next/image";
import React, { SyntheticEvent, useState } from "react";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const Contact = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function hadlesubmit(e: SyntheticEvent) {
    e.preventDefault();
    const text = `Halo Satria Nusa Enjinering! saya ${name} dengan email ${email}, saya tertarik mempelajari dengan lanjut perusahaan Anda.`;
    const message = encodeURIComponent(text);
    const url =
      "https://api.whatsapp.com/send?phone=6281534617975&text=" + message;
    window.open(url, "__blank");
  }
  return (
    <div id="contact">
      <div className="flex justify-center w-full">
        <div className="justify-between w-full px-5 max-w-7xl xl:flex xl:px-0">
          <div className="flex flex-col items-center w-full xl:w-2/5 md:items-start">
            <div className="flex">
              <Image
                width={236}
                height={48}
                unoptimized
                className="my-auto"
                src="/logo.png"
                alt="Workflow"
              />
            </div>
            <div className="mt-10 font-bold text-[#098AD2]">{Translator.t('address', lang)}</div>
            <div className="flex mt-3">
              Jl. Budi Luhur No. 196 Medan 20123 Sumatera Utara - Indonesia
            </div>
          </div>
          <div className="flex flex-col items-center w-full pt-10 xl:w-1/5 xl:pt-0 md:items-start">
            <div className="font-bold text-[#098AD2]">{Translator.t('quick-links', lang)}</div>
            <div className="mt-5">
              <Link className="hover:text-[#098AD2]" href={Translator.gotoUrl("/", lang)}>Home</Link>
            </div>
            <div className="mt-5">
              <Link className="hover:text-[#098AD2]" href={Translator.gotoUrl("#about", lang)}>{Translator.t("about-us", lang)}</Link>
            </div>
            <div className="mt-5">
              <Link className="hover:text-[#098AD2]" href={Translator.gotoUrl("#product", lang)}>{Translator.t("product-services", lang)}</Link>
            </div>
            <div className="mt-5">
              <Link className="hover:text-[#098AD2]" href={Translator.gotoUrl("#infrasctructure", lang)}>{Translator.t("infrastructure", lang)}</Link>
            </div>
            <div className="mt-5">
              <Link className="hover:text-[#098AD2]" href={Translator.gotoUrl("#awards", lang)}>{Translator.t("awards", lang)}</Link>

            </div>
            <div className="mt-5">
              <Link className="hover:text-[#098AD2]" href={Translator.gotoUrl("#partner", lang)}>{Translator.t("partners", lang)}</Link>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center w-full pt-10 xl:pt-0 md:items-start">
              <div className="font-bold">
                <div className="text-[#098AD2]">{Translator.t('phone2', lang)}</div>
              </div>
              <div className="mt-5">(061) 8444555</div>
            </div>
            <div className="flex flex-col items-center w-full pt-10 mt-5 xl:pt-0 md:items-start">
              <form onSubmit={hadlesubmit}>
                <div className="font-bold text-center md:text-start text-[#098AD2]">
                  Email
                </div>
                <div className="mt-5">gmp.medan@gmail.com</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-center w-full py-5 bg-[#098AD2]">
          <div className="justify-center hidden w-full text-base font-normal text-white xl:flex max-w-7xl">
            <div className="px-5 xl:px-0">
              PT. Global Mitra Prima © All rights reserved Copyrights 2024
            </div>
          </div>
          <div className="w-full xl:hidden max-w-7xl">
            <div className="flex justify-center w-full text-base font-normal text-center xl:hidden max-w-7xl">
              <div className="px-5 text-white xl:px-0">
                PT. Global Mitra Prima © All rights reserved Copyrights 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
