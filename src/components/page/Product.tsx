"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { Transition } from "@headlessui/react";

const Product = ({ data }: { data: any }) => {
  const [expand, setexpand] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 ">
      <div>
        <Image
          className="w-full"
          src={data.image}
          unoptimized
          height={100}
          width={100}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center pl-10 mt-5 md:mt-0">
        <div className="mb-5 font-bold">{data.title}</div>
        <div>{data.text}</div>
        <Transition
          show={expand}
          enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          <div
            className="prose pts-20 text-black "
            dangerouslySetInnerHTML={{
              __html: "<div>" + data.text2 + "</div>",
            }}
          />
        </Transition>
        <div>
          {data.text2 && (
            <span
              onClick={() => {
                setexpand(!expand);
              }}
            >
              <ButtonPrimary>
                {expand ? "Read less" : "Read More"}
              </ButtonPrimary>
            </span>
          )}

          {/* <button
            onClick={() => {
              setexpand(!expand);
            }}
            className="bg-green-800 text-white font-semibold px-11 py-4 mt-7"
          >
            {expand ? "Read less" : "Read More"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
