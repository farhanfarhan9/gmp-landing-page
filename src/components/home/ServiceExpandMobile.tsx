import Image from "next/image";
import React from "react";

interface Service {
  id: number;
  title: string;
  bg: string;
  desc: string;
  color: string;
  with: string;
}

const ServiceExpandMobile = ({
  data,
}: {
  data: Service;
 
}) => {
  return (
    <>
      <div
        className={`transition-all duration-200 relative overflow-hidden`}
        style={{ height: "600px" }}
      >
        <Image
          unoptimized
          width={100}
          height={100}
          src={data.bg}
          alt="background2"
          className="h-full w-full object-cover"
        />
        <div
          className={`absolute left-0 right-0 top-0 bottom-0 opacity-50 ${data.color}`}
        ></div>
        <div className="absolute left-0 right-0 top-0 bottom-0">
          <div className={`flex h-full justify-center items-center `}>
            <div className="flex flex-col text-white px-10 ">
              <div className="font-bold text-3xl md:text-4xl lg:text-4xl xl:text-4xl pb-5">{data.title}</div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">{data.desc}</p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceExpandMobile;
