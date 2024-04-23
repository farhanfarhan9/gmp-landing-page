"use client";
import Image from "next/image";
import React, { SyntheticEvent, useState } from "react";
import Translator from "@/utils/Translator";
import { useSearchParams } from "next/navigation";

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
        <div className="max-w-7xl md:flex px-5 md:px-0 w-full font-semibold">
          <div className="w-full md:w-2/5">
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
                  alt="Workflow"
                />
              </div>
              <div>+6281534617975</div>
            </div>
            <div className="flex mt-3">
              <div className="mr-2">
                <Image
                  width={25}
                  height={25}
                  unoptimized
                  className=""
                  src="/img/footer/email.png"
                  alt="Workflow"
                />
              </div>
              project@satrianusa.group
            </div>
          </div>
          <div className="w-full md:w-1/5 pt-10 md:pt-0">
            <div className="font-bold">Quick Links</div>
            <div className="mt-5">
              <a href="/">Home</a>
            </div>
            <div className="mt-5">
              <a href="/">Our Impact</a>
            </div>
            <div className="mt-5">
              <a href="/about-us">About Us</a>
            </div>
            <div className="mt-5">
              <a href="/project">Projects</a>
            </div>
            <div className="mt-5">
              <a href="#">Solutions & Products</a>
            </div>
          </div>
          <div className="w-full md:w-1/5 pt-10 md:pt-0">
            <div className="font-bold">
              <a href="#">Information</a>
            </div>
            <div className="mt-5">
              <a href="#">Terms & Condition</a>
            </div>
            <div className="mt-5">
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          <div className="w-full md:w-1/5 pt-10 md:pt-0">
            <form onSubmit={hadlesubmit}>
              <div className="font-bold">Send Us Your Email</div>
              <div className="mt-5">
                <input
                  value={name}
                  className="border border-black px-3 py-2 w-full rounded-xl"
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="mt-5">
                <input
                  value={email}
                  className="border border-black px-3 py-2 w-full rounded-xl"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="mt-5">
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
          <div className="max-w-7xl flex w-full font-semibold justify-end">
            <div>
              Satria Nusa Enjinering © All rights reserved Copyrights 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
