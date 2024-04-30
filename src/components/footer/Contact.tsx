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
      <div className="w-full flex justify-center">
        <div className="max-w-7xl xl:flex px-5 xl:px-0 w-full">
          <div className="w-full xl:w-2/5 flex flex-col items-center md:items-start">
            <Image
              width={236}
              height={48}
              unoptimized
              className=""
              src="/logo_k3.png"
              alt="Workflow"
            />
            <div className="text-sm font-light">
              Sustainability Starts from Reliable Engineering
            </div>
            <div className="mt-10 font-bold">Contact Us</div>
            <div className="flex mt-3">
              <div className="mr-2">
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  className=""
                  src="/img/footer/wa.png"
                  alt="WhatsApp Logo"
                />
              </div>
              <a href="tel:+6281534617975">+6281534617975</a>
            </div>
            <div className="flex mt-3">
              <div className="mr-2">
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  className=""
                  src="/img/footer/email.png"
                  alt="Email Logo"
                />
              </div>
              <a href="mailto:project@satrianusa.group">
                project@satrianusa.group
              </a>
            </div>
          </div>
          <div className="w-full xl:w-1/5 pt-10 xl:pt-0 flex flex-col items-center md:items-start">
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
          <div className="w-full xl:w-1/5 pt-10 xl:pt-0 flex flex-col items-center md:items-start">
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
          <div className="w-full xl:w-1/5 pt-10 xl:pt-0 flex flex-col items-center md:items-start">
            <form onSubmit={hadlesubmit}>
              <div className="font-bold text-center md:text-start">Send Us Your Email</div>
              <div className="mt-5">
                <input
                  value={name}
                  className="border border-black px-3 py-2 xl:w-full rounded-xl"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="mt-5">
                <input
                  value={email}
                  className="border border-black px-3 py-2 xl:w-full rounded-xl"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="mt-5 flex justify-center md:justify-start">
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

        <div className="w-full flex justify-center my-10">
          <div className="hidden xl:flex max-w-7xl w-full font-semibold justify-end">
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
                src="/img/footer/youtube.png"
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
                src="/img/footer/linkedin.png"
                alt="Workflow"
              />
            </a>
            <div className="px-5 xl:px-0">
              Satria Nusa Enjinering © All rights reserved Copyrights 2024
            </div>
          </div>
          <div className="xl:hidden max-w-7xl w-full">
            <div className="flex gap-5 justify-center">
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
                  src="/img/footer/youtube.png"
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
                  src="/img/footer/linkedin.png"
                  alt="Workflow"
                />
              </a>
            </div>
            <div className="flex xl:hidden max-w-7xl w-full font-semibold justify-center mt-5 text-center">
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
