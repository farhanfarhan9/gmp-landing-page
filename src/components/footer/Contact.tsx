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
            <div className="mt-10 font-bold text-[#098AD2]">Address</div>
            <div className="flex mt-3">
              Jl. Budi Luhur No. 196 Medan 20123 Sumatera Utara - Indonesia
            </div>
          </div>
          <div className="flex flex-col items-center w-full pt-10 xl:w-1/5 xl:pt-0 md:items-start">
            <div className="font-bold text-[#098AD2]">Quick Links</div>
            <div className="mt-5">
              {/* <Link href={Translator.gotoUrl("/", lang)}>Home</Link> */}
              Home
            </div>
            <div className="mt-5">
              {/* <Link href={Translator.gotoUrl("/", lang)}>About Us</Link> */}
              About Us
            </div>
            <div className="mt-5">
              {/* <Link href={Translator.gotoUrl("/about-us", lang)}>About Us</Link> */}
              Product & Services
            </div>
            <div className="mt-5">
              {/* <Link href={Translator.gotoUrl("/project", lang)}>Projects</Link> */}
              Infrastructures
            </div>
            <div className="mt-5">
              {/* <Link href={Translator.gotoUrl("/project", lang)}>
                Solutions & Products
              </Link> */}
              Awards
            </div>
            <div className="mt-5">
              {/* <Link href={Translator.gotoUrl("/project", lang)}>
                Solutions & Products
              </Link> */}
              Partners
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center w-full pt-10 xl:pt-0 md:items-start">
              <div className="font-bold">
                <div className="text-[#098AD2]">Phone</div>
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
          <div className="justify-center hidden w-full font-semibold text-white xl:flex max-w-7xl">
            <div className="px-5 xl:px-0">
            PT. Global Mitra Prima © All rights reserved Copyrights 2024
            </div>
          </div>
          <div className="w-full xl:hidden max-w-7xl">
            <div className="flex justify-center gap-5">
              <a
                href="https://www.youtube.com/@SatriaNusaEnjinering-wk4xl"
                target="_BLANK"
                className=""
              >
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  className=""
                  src="/img/footer/youtube.svg"
                  alt="Workflow"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/satrianusaenjinering"
                target="_BLANK"
                className=""
              >
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  className=""
                  src="/img/footer/linkedin.svg"
                  alt="Workflow"
                />
              </a>
            </div>
            <div className="flex justify-center w-full mt-5 font-semibold text-center xl:hidden max-w-7xl">
              <div className="px-5 xl:px-0">
                Satria Nusa Enjinering © All rights reserved Copyrights 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
