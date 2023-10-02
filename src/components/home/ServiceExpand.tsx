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

const ServiceExpand = ({
  data,
  updatebyid,
}: {
  data: Service;
  updatebyid: (id: number, newWith: string) => void;
}) => {
  return (
    <>
      <div
        className={`${data.with} transition-all duration-200 relative overflow-hidden`}
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
              <div className="font-bold text-3xl pb-5">{data.title}</div>
              <div
                className="prose text-white text-lg list list-disc"
                dangerouslySetInnerHTML={{
                  __html: data.desc,
                }}
              ></div>
              {data.with != "w-2/5" && (
                <div
                  className="absolute bottom-5 right-5 p-3 bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    updatebyid(data.id, "w-2/5");
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceExpand;
