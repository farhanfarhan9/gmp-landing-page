"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function page() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center justify-center w-full bg-white bg-gradient-to-b">
          <div className="container relative z-50 flex flex-col gap-10 my-20 space-y-10 lg:flex-row">
            <div className="w-full xl:w-3/5">
              <Image
                src="/img/bluewave/bluewave-logo.png"
                unoptimized
                className="z-50 w-fit"
                alt=""
                width={1920}
                height={1080}
              />
              <h1 className="font-bold text-6xl text-[#0E4F94] mt-20 w-4/5 md:w-4/5">
                {Translator.t("bluewave-title", lang)}
              </h1>
              <p className="w-4/5 text-base mt-14">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                veniam laudantium maiores odio vitae est animi aut, nam et
                deleniti obcaecati a in possimus quisquam fugit quas molestiae.
                Aliquid, nemo.
              </p>
              <div className="flex mt-16 space-x-12">
                <p className="my-auto font-medium">{Translator.t("login-as", lang)}:</p>
                <div className="flex space-x-5">
                  <Link
                    href="JavaScript:void(0)"
                    target="_blank"
                    className="px-10 py-2 border-2 border-[#0E4F94] rounded-full text-base text-semibold bg-[#0E4F94] text-white hover:bg-[#0C3E77]"
                  >
                    {Translator.t("client", lang)}
                  </Link>
                  <Link
                    href="https://app.satrianusa.group/login"
                    target="_blank"
                    className="px-10 py-2 border-2 border-[#0E4F94] rounded-full text-base text-semibold bg-white text-[#0E4F94] hover:bg-[#f0f0f0]"
                  >
                    {Translator.t("staff", lang)}
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-50 w-full my-auto xl:w-2/5 ">
              <Image
                src="/img/bluewave/banner.png"
                unoptimized
                className="object-cover w-full my-auto"
                alt=""
                width={1920}
                height={1080}
              />
            </div>
            <div className="absolute top-0 right-0 translate-x-20 -translate-y-20">
              <Image
                src="/img/bluewave/circle.png"
                unoptimized
                className="z-0 w-full"
                alt=""
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
