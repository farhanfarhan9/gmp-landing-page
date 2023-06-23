"use client";
import Image from "next/image";
import React, { useState } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

const Product = ({ data }: { data: any }) => {
  const [expand, setexpand] = useState(false);
  return (
    <div className="grid grid-cols-2 py-10 ">
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
      <div className="flex flex-col justify-center pl-10 ">
        <div className="mb-5 font-bold">{data.title}</div>
        <div>{data.text}</div>
        {expand && (
          <div className="transition-all transform  duration-500">
            <div
              className="prose pts-20 text-black "
              dangerouslySetInnerHTML={{
                __html: "<div>" + data.text2 + "</div>",
              }}
            />
          </div>
        )}
        <div>
          {/* <ButtonPrimary>{expand ? "Read less" : "Read More"}</ButtonPrimary> */}
          <button
            onClick={() => {
              setexpand(!expand);
            }}
            className="bg-green-800 text-white font-semibold px-11 py-4 mt-7"
          >
            {expand ? "Read less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
