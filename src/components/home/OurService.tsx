"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function OurService() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  const serviceData = [
    {
      img: "/img/home/service1.png",
      alt: "waste",
      title: Translator.t("service-title-1", lang),
      desc: <div>{Translator.t("service-1-desc", lang)}</div>,
    },
    {
      img: "/img/home/service2.png",
      alt: "waste",
      title: Translator.t("service-title-2", lang),
      desc: <div>{Translator.t("service-2-desc", lang)}</div>,
    },
  ];
  return (
    <div className="py-20 bg-[#D9F1FF]">
      <div className="mx-auto md:max-w-7xl">
        <div className="text-4xl font-semibold text-[#098AD2] ">
          Company Profile
        </div>

        <div className="flex mt-10">
          <div className="md:w-1/3 border-r-4 border-r-[#098AD2]">
            <ul className="space-y-8">
              <li
                className={`text-3xl font-semibold px-2 py-4 cursor-pointer text-black ${
                  activeservice === 0 && "bg-[#098AD2] text-white"
                }`}
                onClick={() => setactiveservice(0)}
              >
                Vision
              </li>
              <li
                className={`text-3xl font-semibold px-2 py-4 cursor-pointer  text-black ${
                  activeservice === 1 && "bg-[#098AD2] text-white"
                }`}
                onClick={() => setactiveservice(1)}
              >
                Mission
              </li>
            </ul>
          </div>
          <div className="pl-10 md:w-full">
            {activeservice === 0 ? (
              <div className="space-y-10">
                {/* Content for Vision */}
                <h2 className="text-3xl font-semibold">Company Vision</h2>
                <p className="text-xl font-semibold">
                  To become a reliable, productive and trusted distributor.{" "}
                </p>
                <div className="flex gap-10">
                  <Image
                    src={"/img/home/vision1.png"}
                    className="object-cover w-full h-full"
                    alt=""
                    width={2000}
                    height={400}
                  />
                  <Image
                    src={"/img/home/vision2.png"}
                    className="object-cover w-full h-full"
                    alt=""
                    width={2000}
                    height={400}
                  />
                  <Image
                    src={"/img/home/vision3.png"}
                    className="object-cover w-full h-full"
                    alt=""
                    width={2000}
                    height={400}
                  />
                </div>
              </div>
            ) : (
              <div className="">
                <h2 className="text-3xl font-semibold">Company Mission</h2>
                <ul className="mt-10 space-y-4">
                  <li className="flex gap-10">
                  <Image
                    src={"/img/home/m1.png"}
                    className="w-fit h-fit"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">Develop and improve HR quality, especially in the sales department.</p>
                  </li>
                  <li className="flex gap-10">
                  <Image
                    src={"/img/home/m2.png"}
                    className="w-fit h-fit"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">Keep developing sustainable IT and management system that is capable of optimizing business operations.</p>
                  </li>
                  <li className="flex gap-10">
                  <Image
                    src={"/img/home/m3.png"}
                    className="w-fit h-fit"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">Maintain and improve the good business relationship between principals and customers.</p>
                  </li>
                  <li className="flex gap-10">
                  <Image
                    src={"/img/home/m4.png"}
                    className="w-fit h-fit"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">Create teamworks and maintain a safe, harmonious, and work productive atmosphere among the shareholders, company leaders, and employees.</p>
                  </li>
                  <li className="flex gap-10">
                  <Image
                    src={"/img/home/m5.png"}
                    className="w-fit h-fit"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">Build and develop an ideal enterprise infrastructure along with the development and distribution demands.</p>
                  </li>
                  <li className="flex gap-10">
                  <Image
                    src={"/img/home/m6.png"}
                    className="w-fit h-fit"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <p className="my-auto">Expanding business network and increase the number of good principals and mutually benecial selectively.</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
