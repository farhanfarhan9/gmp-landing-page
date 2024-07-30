"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import {useSearchParams} from "next/navigation";
import {useState} from "react";

function Partners() {
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || undefined;
    const [activepartner, setactivepartner] = useState(0);
    const togglePartner = () => {
        setactivepartner((prev) => (prev === 0 ? 1 : 0));
    };
    return (
        <div className="py-10 mt-10 space-y-5 md:space-y-24 md:mx-auto md:max-w-7xl" id="partner">
            <div>
                <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center">
                    {Translator.t('partners', lang)}
                </div>
                <div
                    className="grid w-full grid-cols-3 gap-5 px-2 my-auto mt-5 text-center md:gap-3 md:grid-cols-9 content-evenly">
                    <Image
                        src={"/img/home/partners/partner1.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner2.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner3.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner4.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner5.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner6.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner7.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner8.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/partner9.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    {activepartner === 1 && (
                        <>
                            <Image
                                src={"/img/home/partners/partner10.png"}
                                className="object-scale-down mx-auto my-auto md:col-start-2 w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Image
                                src={"/img/home/partners/partner11.png"}
                                className="object-scale-down mx-auto my-auto w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Image
                                src={"/img/home/partners/partner12.png"}
                                className="object-scale-down mx-auto my-auto w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Image
                                src={"/img/home/partners/partner13.png"}
                                className="object-scale-down mx-auto my-auto w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Image
                                src={"/img/home/partners/partner14.png"}
                                className="object-scale-down mx-auto my-auto w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Image
                                src={"/img/home/partners/partner15.png"}
                                className="object-scale-down mx-auto my-auto w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                            <Image
                                src={"/img/home/partners/partner16.png"}
                                className="object-scale-down mx-auto my-auto w-fit"
                                alt=""
                                width={20}
                                height={20}
                            />
                        </>
                    )}
                </div>
                <p
                    className="text-center text-[#098AD2] text-lg mt-6 flex justify-center cursor-pointer"
                    onClick={() => togglePartner()}
                >
                    {activepartner === 0 ? Translator.t('see-more', lang) : Translator.t('see-less', lang)}
                    {activepartner === 0 ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="my-auto size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="my-auto size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                            />
                        </svg>
                    )}
                </p>
            </div>
            <div>
                <div className="text-xl md:text-4xl font-semibold text-[#098AD2] text-center">
                    {Translator.t('customer', lang)}
                </div>
                <div
                    className="grid w-full grid-cols-3 gap-10 px-2 my-auto mt-5 text-center md:gap-10 md:grid-cols-7 content-evenly">
                    <Image
                        src={"/img/home/partners/customers1.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/customers2.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/customers3.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/customers4.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/customers5.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/customers6.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                    <Image
                        src={"/img/home/partners/customers7.png"}
                        className="object-scale-down mx-auto my-auto w-fit"
                        alt=""
                        width={20}
                        height={20}
                    />
                </div>
                <p
                    className="text-center text-[#098AD2] text-lg flex justify-center mt-6"
                >
                    {Translator.t('and-more', lang)}
                </p>
            </div>
            {/* <div className="grid grid-cols-3 gap-4 md:grid-cols-9">
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner1.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner2.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner3.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner4.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner5.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner6.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner7.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner8.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner9.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner10.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner11.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner12.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner13.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner14.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner15.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
        <div className="w-full my-auto">
          <Image
            src={"/img/home/partners/partner16.png"}
            className="w-fit"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </div> */}
        </div>
    );
}

export default Partners;
