"use client";
import Translator from "@/utils/Translator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function Partners() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || undefined;
  const [activeservice, setactiveservice] = useState(0);
  return (
    <div className="py-10 mt-10 space-y-10 md:mx-auto md:max-w-7xl">
      <div className="text-4xl font-semibold text-[#098AD2] text-center">
        Partners
      </div>
      <div className="flex justify-between w-full gap-5 my-auto">
        <Image
          src={"/img/home/partners/partner1.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner2.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner3.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner4.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner5.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner6.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner7.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner8.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner9.png"}
          className="object-scale-down w-full"
          alt=""
          width={20}
          height={20}
        />
      </div>
      <div className="flex justify-between w-full gap-5 my-auto">
        <Image
          src={"/img/home/partners/partner10.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner11.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner12.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner13.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner14.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner15.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
        <Image
          src={"/img/home/partners/partner16.png"}
          className="object-scale-down w-fit"
          alt=""
          width={20}
          height={20}
        />
      </div>
      <div className="py-20">
        <div className="text-4xl font-semibold text-[#098AD2] text-center">
          Customers
        </div>
        <div className="flex justify-between w-full gap-5 my-auto">
          <Image
            src={"/img/home/partners/customers1.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
          <Image
            src={"/img/home/partners/customers2.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
          <Image
            src={"/img/home/partners/customers3.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
          <Image
            src={"/img/home/partners/customers4.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
          <Image
            src={"/img/home/partners/customers5.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
          <Image
            src={"/img/home/partners/customers6.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
          <Image
            src={"/img/home/partners/customers7.png"}
            className="object-scale-down w-full"
            alt=""
            width={20}
            height={20}
          />
        </div>
      </div>
      {/* <div className="grid grid-cols-9 gap-4">
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
