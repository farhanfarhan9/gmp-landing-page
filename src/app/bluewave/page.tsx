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
      <div className="relative">
        <div className="flex flex-col items-center justify-center w-full bg-gradient-to-b from-neutral-50 to-[#0E4F94] relative">
          <div className="z-50 flex flex-col items-center justify-center mt-20 space-y-10">
            <h1 className="font-bold text-6xl text-[#0E4F94] w-4/5 md:w-4/5 text-center">
              {Translator.t("bluewave-title", lang)}
            </h1>
            <p className="w-4/5 text-base text-center md:w-3/4 lg:w-2/4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              quisquam eaque ipsa aut? Deserunt error aspernatur quaerat
              voluptatum est, eos commodi adipisci, velit illum maxime vel
              ducimus voluptatibus, aut exercitationem?
            </p>
            <div className="flex flex-col items-center justify-center">
              <p className="font-medium">Login As</p>
              <div className="flex mt-5 space-x-5">
                <Link
                  href="JavaScript:void(0)"
                  target="_blank"
                  className="px-6 py-2 border-2 border-[#0E4F94] rounded-full text-medium bg-[#0E4F94] text-white hover:bg-[#0C3E77]"
                >
                  Client
                </Link>
                <Link
                  href="https://app.satrianusa.group/login"
                  target="_blank"
                  className="px-6 py-2 border-2 border-[#0E4F94] rounded-full text-medium bg-white text-[#0E4F94] hover:bg-[#f0f0f0]"
                >
                  Staff
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 z-0">
            <Image
              className="z-0"
              src="/img/bluewave/patern.png"
              width={900}
              height={600}
              alt=""
            />
          </div>
          <div className="absolute right-0 z-0 bottom-20">
            <Image
              className="z-0"
              src="/img/bluewave/patern2.png"
              width={900}
              height={600}
              alt=""
            />
          </div>
          <Image
            src="/img/bluewave/banner.png"
            unoptimized
            className="z-50 object-cover max-w-xl mt-10 -my-40 md:max-w-2xl lg:max-w-4xl xl:max-w-7xl "
            alt=""
            width={1920}
            height={1080}
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute z-0 flex justify-end w-full">
          <Image
            className="z-0"
            src="/img/solutions-and-product/pattern.png"
            width={900}
            height={600}
            alt=""
          />
        </div>
        <div className="container relative mx-auto mb-20">
          <div className="z-50 flex justify-center w-full mt-40">
            <div className="text-base max-w-7xl">
              <div className="mt-20">
                <p className="text-[#0E4F94] text-4xl font-bold text-center">
                  {Translator.t("trusted-client", lang)}
                </p>
              </div>
              <div className="flex gap-5 ">
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image1.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image2.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image3.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image4.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image5.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image6.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image7.png"
                  width={900}
                  height={600}
                  alt=""
                />
                <Image
                  className="z-0 object-scale-down"
                  src="/img/bluewave/sponsors/image8.png"
                  width={900}
                  height={600}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="z-50 flex flex-col justify-center gap-5 mt-20 md:flex-row">
            <div className="order-2 w-full md:w-1/2 md:order-1">
              <Image
                className="z-0 "
                src="/img/bluewave/banner2.png"
                width={900}
                height={600}
                alt=""
              />
            </div>
            <div className="order-1 w-full my-auto md:w-1/2 md:order-2">
              <h1 className="font-bold z-20 text-3xl text-[#0E4F94]">
                {Translator.t("track-machine", lang)}
              </h1>
              <div className="mt-5 space-y-6">
                <p className="text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magni in perferendis molestiae deserunt, eum cumque ullam
                  culpa reiciendis architecto quaerat aliquid commodi? Quae
                  consectetur ex nisi eveniet inventore veniam corporis!
                </p>
                <p className="text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  porro tempore ipsa excepturi deserunt deleniti dolores
                  molestiae suscipit maxime cum incidunt repellendus aspernatur
                  ab libero soluta ipsum, alias et asperiores eaque! Commodi qui
                  rerum eaque, temporibus sed illo quo magni, saepe iste
                  consequuntur laborum explicabo reiciendis itaque laudantium
                  dolor dolore.
                </p>
              </div>
            </div>
          </div>
          <div className="z-50 gap-5 mt-20">
            <h1 className="font-bold z-20 text-3xl text-[#0E4F94] text-center">
              {Translator.t("compe-adv", lang)}
            </h1>
            <div className="grid w-full grid-cols-1 gap-20 mt-10 md:grid-cols-2">
              <div className="flex items-start gap-10">
                <Image
                  className="object-scale-down w-28"
                  src="/img/bluewave/adv1.png"
                  width={200}
                  height={200}
                  alt=""
                />
                <div>
                  <h2 className="text-[#0E4F94] font-medium text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <p className="mt-5 text-base font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto explicabo distinctio cumque assumenda ut et quaerat
                    perferendis aut beatae sapiente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10">
                <Image
                  className="object-scale-down w-28"
                  src="/img/bluewave/adv2.png"
                  width={200}
                  height={200}
                  alt=""
                />
                <div>
                  <h2 className="text-[#0E4F94] font-medium text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <p className="mt-5 text-base font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto explicabo distinctio cumque assumenda ut et quaerat
                    perferendis aut beatae sapiente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10">
                <Image
                  className="object-scale-down w-28"
                  src="/img/bluewave/adv3.png"
                  width={200}
                  height={200}
                  alt=""
                />
                <div>
                  <h2 className="text-[#0E4F94] font-medium text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <p className="mt-5 text-base font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto explicabo distinctio cumque assumenda ut et quaerat
                    perferendis aut beatae sapiente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-10">
                <Image
                  className="object-scale-down w-28"
                  src="/img/bluewave/adv4.png"
                  width={200}
                  height={200}
                  alt=""
                />
                <div>
                  <h2 className="text-[#0E4F94] font-medium text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </h2>
                  <p className="mt-5 text-base font-normal">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Iusto explicabo distinctio cumque assumenda ut et quaerat
                    perferendis aut beatae sapiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
