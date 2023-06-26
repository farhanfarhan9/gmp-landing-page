import Image from "next/image";
import React from "react";

interface Props {
  data: any;
}

const detail = ({ data }: Props) => {
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md: mx-auto max-w-7xl my-28 text-[#41444B]">
      <div>
        <Image
          src={data.picture1}
          unoptimized
          height={100}
          width={100}
          className="w-full object-cover"
          alt=""
        />
        <div className="grid grid-cols-2 gap-3 my-3">
          <Image
            src={data.picture2}
            unoptimized
            height={100}
            width={100}
            className="w-full h-72 object-cover"
            alt=""
          />
          <Image
            src={data.picture3}
            unoptimized
            height={100}
            width={100}
            className="w-full h-72 object-cover"
            alt=""
          />
          <Image
            src={data.picture4}
            unoptimized
            height={100}
            width={100}
            className="w-full h-72 object-cover"
            alt=""
          />
          <Image
            src={data.picture5}
            unoptimized
            height={100}
            width={100}
            className="w-full h-72 object-cover"
            alt=""
          />
        </div>
        {data.video && (
          <div>
            <div className="py-5">Video</div>

            <iframe
              className="w-full h-96"
              src={`https://www.youtube.com/embed/${data.video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        )}
      </div>
      <div className="md:pl-12 pr-40">
        <div className="font-bold mb-5">{data.title}</div>
        <div className="my-3">{data.nickname}</div>
        <div className="flex items-center my-20 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          {data.location}
        </div>
        <div>{data.desc}</div>
      </div>
    </div>
  );
};

export default detail;
