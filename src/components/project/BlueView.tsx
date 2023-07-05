import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  image: string;
  nickname: string;
  location: string;
  desc: string;
  url: string;
}

const LeftView = ({ title, image, nickname, location, desc, url }: Props) => {
  return (
    <div id="service">
      <div className="hidden xl:block">
        <div className="grid grid-cols-2">
          <div className="bg-blue-800 text-white px-16 py-8">
            <div className="font-semibold my-2 pts-24">{title}</div>
            <div className="my-1">{nickname}</div>
            <div className="flex items-center space-x-2 py-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
              </span>
              <span>{location}</span>
            </div>
            <p>{desc}</p>
            <a href={url}>
              <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7">
                See Details
              </button>
            </a>
          </div>
          <div>
            <Image
              unoptimized
              width={100}
              height={100}
              className="w-full h-80 object-cover"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="xl:hidden block-row">
        <div className="grid grid-rows-0 mx-4">
          <Image
            unoptimized
            width={100}
            height={100}
            className="w-full h-80 object-cover"
            src={image}
            alt=""
          />
          <div className="bg-blue-800 text-white px-16 py-8">
            <div className="font-semibold my-2 text-xs sm:text-sm md:text-base lg:text-lg pts-24">{title}</div>
            <div className="my-1 text-xs sm:text-sm md:text-base lg:text-lg">{nickname}</div>
            <div className="flex items-center space-x-2 py-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>{" "}
              </span>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg">{location}</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg">{desc}</p>
            <a href={url}>
              <button className="bg-white text-green-800 font-semibold px-11 py-4 mt-7 text-base md:text-lg lg:text-xl xl:text-2xl">
                See Details
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftView;
