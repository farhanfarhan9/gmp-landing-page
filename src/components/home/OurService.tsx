"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {useState} from "react";

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
        <div className="py-10 md:py-20 bg-[#D9F1FF]" id="about">
            <div className="mx-auto md:max-w-7xl">
                <div className="text-xl text-center md:text-left md:text-4xl font-semibold text-[#098AD2] ">
                    {Translator.t("company-profile-title", lang)}
                </div>

                <div className="flex flex-col mt-5 md:mt-10 md:flex-row">
                    <div className="md:w-1/3 md:border-r-4 md:border-r-[#098AD2]">
                        <ul className="flex justify-center md:space-y-8 md:flex-col">
                            <li
                                className={`text-sm md:text-3xl font-semibold px-4 py-1 md:px-2 md:py-4 cursor-pointer text-black ${
                                    activeservice === 0 && "bg-[#098AD2] text-white"
                                }`}
                                onClick={() => setactiveservice(0)}
                            >
                                {Translator.t("vision", lang)}
                            </li>
                            <li
                                className={`text-sm md:text-3xl font-semibold px-4 py-1 md:px-2 md:py-4 cursor-pointer  text-black ${
                                    activeservice === 1 && "bg-[#098AD2] text-white"
                                }`}
                                onClick={() => setactiveservice(1)}
                            >
                                {Translator.t("mission", lang)}
                            </li>
                        </ul>
                    </div>
                    <div className="px-10 md:pl-10 md:w-full">
                        {activeservice === 0 ? (
                            <div className="space-y-5 md:space-y-10">
                                {/* Content for Vision */}
                                <h2 className="hidden text-3xl font-semibold md:block">
                                    {Translator.t("company-vision", lang)}
                                </h2>
                                <p className="text-sm font-normal md:text-xl md:font-semibold">
                                    {Translator.t("company-vision-1", lang)}
                                </p>
                                <div className="flex w-full gap-5 overflow-x-auto md:gap-10">
                                    <Image
                                        src={"/img/home/vision1.png"}
                                        className="object-cover w-4/5 h-full md:w-full"
                                        alt=""
                                        width={2000}
                                        height={400}
                                    />
                                    <Image
                                        src={"/img/home/vision2.png"}
                                        className="object-cover w-4/5 h-full md:w-full"
                                        alt=""
                                        width={2000}
                                        height={400}
                                    />
                                    <Image
                                        src={"/img/home/vision3.png"}
                                        className="object-cover w-4/5 h-full md:w-full"
                                        alt=""
                                        width={2000}
                                        height={400}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <h2 className="hidden text-3xl font-semibold md:block">
                                    {Translator.t("company-mission", lang)}
                                </h2>
                                <ul className="mt-5 space-y-4 md:mt-10">
                                    {[1, 2, 3, 4, 5, 6].map((item) => (
                                        <li key={item} className="flex w-full items-center gap-4">
                                            <Image
                                                src={`/img/home/m${item}.png`}
                                                className="object-scale-down w-8 h-8" // Ensure image size is consistent
                                                alt=""
                                                width={80}
                                                height={80}
                                            />
                                            <p className="flex-1 my-auto text-sm font-normal md:text-base md:font-semibold">
                                                {Translator.t(`company-mission-${item}`, lang)}
                                            </p>
                                        </li>
                                    ))}
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
