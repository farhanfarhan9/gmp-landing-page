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
        <div className="w-full px-5 max-w-7xl xl:flex xl:px-0">
          <div className="flex flex-col items-center w-full xl:w-2/5 md:items-start">
            <Image
              width={236}
              height={48}
              unoptimized
              className="my-auto"
              src="/logo_k3.png"
              alt="Workflow"
            />
            <div className="text-sm font-light">
              Sustainability Starts from Reliable Engineering
            </div>
            <div className="mt-10 font-bold">Contact Us</div>
            <div className="flex mt-3">
              <div className="my-auto mr-2">
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  src="/img/footer/wa.svg"
                  alt="WhatsApp Logo"
                />
              </div>
              <a href="tel:+6281534617975">+6281534617975</a>
            </div>
            <div className="flex mt-3">
              <div className="my-auto mr-2">
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  className=""
                  src="/img/footer/email.svg"
                  alt="Email Logo"
                />
              </div>
              <a href="mailto:project@satrianusa.group">
                project@satrianusa.group
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center w-full pt-10 xl:w-1/5 xl:pt-0 md:items-start">
            <div className="font-bold">Quick Links</div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/", lang)}>Home</Link>
            </div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/", lang)}>Our Impact</Link>
            </div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/about-us", lang)}>About Us</Link>
            </div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/project", lang)}>Projects</Link>
            </div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/project", lang)}>
                Solutions & Products
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-full pt-10 xl:w-1/5 xl:pt-0 md:items-start">
            <div className="font-bold">
              <div>Information</div>
            </div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/project", lang)}>
                Terms & Condition
              </Link>
            </div>
            <div className="mt-5">
              <Link href={Translator.gotoUrl("/project", lang)}>
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-full pt-10 xl:w-1/5 xl:pt-0 md:items-start">
            <form onSubmit={hadlesubmit}>
              <div className="font-bold text-center md:text-start">
                Send Us Your Email
              </div>
              <div className="mt-5">
                <input
                  value={name}
                  className="border border-[#9C9C9C] px-3 py-2 xl:w-full rounded-md"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="mt-5">
                <input
                  value={email}
                  className="border border-[#9C9C9C] px-3 py-2 xl:w-full rounded-md"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="flex justify-center mt-5 md:justify-start">
                <button
                  type="submit"
                  className="bg-[#0E4F94] text-white px-6 py-3 rounded-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <hr className="border-[#0E4F94]" />

        <div className="flex justify-center w-full my-10">
          <div className="justify-end hidden w-full font-semibold xl:flex max-w-7xl">
            <a
              href="https://www.youtube.com/@SatriaNusaEnjinering-wk4xl"
              target="_BLANK"
              className="mr-5"
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
              className="mr-20"
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
            <div className="px-5 xl:px-0">
              Satria Nusa Enjinering © All rights reserved Copyrights 2024
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
