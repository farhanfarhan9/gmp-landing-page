"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import React from "react";

function ProjectMap() {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || undefined;
    return (
        <div className="px-2 mx-4 my-10 mt-14 md:mx-auto max-w-7xl md:px-0">
            <div className="text-[#098AD2] text-xl md:text-5xl text-center font-bold">
                {Translator.t("location", lang)}
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <Image
                        className="object-scale-down mt-7"
                        src={"/img/home/map.svg"}
                        alt=""
                        width={2000}
                        height={400}
                    />
                </div>
                <div className="w-full text-black md:my-32 md:w-1/2">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-base font-semibold md:text-3xl">
                                <span
                                    className="text-[#098AD2] text-xl md:text-5xl font-bold">1 </span>{Translator.t("headquarter", lang)}
                            </h1>
                            <ul className="mt-2 ml-10">
                                <li className="text-base font-medium text-blue-500 list-disc">
                                    <p className="text-sm text-black md:text-base">Medan</p>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-base font-semibold md:text-3xl">
                                <span
                                    className="text-[#098AD2] text-xl md:text-5xl font-bold">5 </span>{Translator.t("branches", lang)}
                            </h1>
                            <ul className="mt-2 ml-10">
                                <li className="text-base font-medium text-blue-500 list-disc">
                                    <p className="text-sm text-black md:text-base">Pematang Siantar</p>
                                </li>
                                <li className="text-base font-medium text-blue-500 list-disc">
                                    <p className="text-sm text-black md:text-base">Banda Aceh</p>
                                </li>
                                <li className="text-base font-medium text-blue-500 list-disc">
                                    <p className="text-sm text-black md:text-base">Lhoksumawe</p>
                                </li>
                                <li className="text-base font-medium text-blue-500 list-disc">
                                    <p className="text-sm text-black md:text-base">Rantau Prapat</p>
                                </li>
                                <li className="text-base font-medium text-blue-500 list-disc">
                                    <p className="text-sm text-black md:text-base">Langsa</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="text-base font-semibold md:text-3xl">
                            <span className="text-[#098AD2] text-xl md:text-5xl font-bold">12 </span>{Translator.t("stations", lang)}
                        </h1>
                        <div className="grid grid-cols-2 gap-10 ml-10">
                            <ul className="mt-2 space-y-2">
                                {[
                                    "Langkat",
                                    "Kabanjahe",
                                    "Bireun",
                                    "Tankengon",
                                    "Sigli",
                                    "Kisaran",
                                ].map((location, index) => (
                                    <li
                                        key={index}
                                        className="text-base font-medium text-blue-500 list-disc"
                                    >
                                        <p className="text-sm text-black md:text-base">{location}</p>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {[
                                    "Sibolga",
                                    "P. Sidempuan",
                                    "Blang Pidie",
                                    "Meulaboh",
                                    "Bagan Batu",
                                    "Deli Serdang",
                                ].map((location, index) => (
                                    <li
                                        key={index + 6}
                                        className="text-base font-medium text-blue-500 list-disc"
                                    >
                                        <p className="text-black">{location}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectMap;
