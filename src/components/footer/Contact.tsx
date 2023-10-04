"use client";
import Image from "next/image";
import React from "react";
import ContactNow from "./ContactNow";
import Translator from '@/utils/Translator';
import { useSearchParams } from 'next/navigation';

const Contact = () => {
  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') || undefined;
  return (
    <div id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 border-t-8 border-blue-800">
        <div className="pl-4 xl:pl-28 pr-5 md:pr-11 xl:pr-52 bg-green-800 py-12">
          <div className="uppercase font-bold text-white mb-5 pts-30 text-2xl md:text-3xl lg:text-4xl">
            {Translator.t('contact-now', lang)}
          </div>
          <div className="my-6 h-1 bg-white w-16"></div>
          <ContactNow />
        </div>
        <div className="flex flex-col lg:flex-row relative font-semibold">
          <div className="capitalize ml-5 md:ml-16 mt-14">
            <div className="text-blue-800 mb-3 pts-24 text-base md:text-lg lg:text-xl">{Translator.t('quick-links', lang)}</div>

            <div className="mb-2 hover:underline text-base md:text-lg lg:text-xl">
              <a href="/#impact">{Translator.t('our-impact', lang)}</a>
            </div>
            <div className="mb-2 hover:underline text-base md:text-lg lg:text-xl">
              <a href="/#about">{Translator.t('about-us', lang)}</a>
            </div>
            <div className="mb-2 hover:underline text-base md:text-lg lg:text-xl">
              <a href="/#service">{Translator.t('our-services', lang)}</a>
            </div>
            <div className="mb-2 hover:underline text-base md:text-lg lg:text-xl">
              <a href="/#portofolio">{Translator.t('our-porofolio', lang)}</a>
            </div>
            <div className="mb-2 hover:underline text-base md:text-lg lg:text-xl">
              <a href="/#contact">{Translator.t('contact', lang)}</a>
            </div>
          </div>
          <div className="h-80 ml-5 md:ml-16 mt-14">
            <div className="capitalize text-blue-800 mb-3 pts-24 text-base md:text-lg lg:text-xl">
              {Translator.t('contact-us', lang)}
            </div>
            <div>
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="ml-3 text-base md:text-lg lg:text-xl">Email</div>
              </div>
              <div className="flex">
                <div className="w-6 h-6"></div>
                <a
                  href="mailto:sales@satrianusa.group"
                  className="ml-3 font-bold text-base md:text-lg"
                >
                  sales@satrianusa.group
                </a>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </div>
                <div className="ml-3 text-base md:text-lg lg:text-xl">Satria access</div>
              </div>
              <div className="flex">
                <div className="w-6 h-6"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=081534617975"
                  target="__blank"
                  className="ml-3 font-bold text-base md:text-lg"
                >
                  +6281534617975
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 left-0 h-24 bg-blue-800 flex justify-center items-center text-white">
            <div className="text-base md:text-lg lg:text-xl ml-4">
              Satria Nusa Enjinering © All rights reserved Copyrights 2023
            </div>
            <div className="flex space-x-2 ml-2 items-center mx-4">
              <a
                href="https://www.linkedin.com/company/satrianusaenjinering/"
                target="__blank"
                className="hover:text-gray-400"
              >
                <Image
                  unoptimized
                  width={30}
                  height={30}
                  src="/linkedin.svg"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/channel/UCN7PlA7IMadLYzOWtnzmAOg">
                <Image
                  unoptimized
                  width={30}
                  height={30}
                  src="/youtube.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
