import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="grid grid-cols-2 border-t-8 border-blue-800">
        <div className="pl-28 pr-52 bg-green-800 py-12">
          <div
            className="uppercase font-bold text-white mb-5"
            style={{ fontSize: "40px" }}
          >
            Contact now
          </div>
          <div className="my-6 h-1 bg-white w-16"></div>
          <form action="" method="POST">
            <div className="mb-9">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-9">
              <input
                type="text"
                name="surname"
                id="surname"
                placeholder="Surname"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-9">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-9"></div>
            <div>
              <button className="w-full hover:shadow-form rounded-md bg-green-800 border-4 py-3 px-8 text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex relative font-semibold">
          <div className="capitalize ml-16 mt-14">
            <div className=" text-blue-800 mb-3 pts-24">Quick Links</div>
            <div className="mb-3">Out impact</div>
            <div className="mb-3">About</div>
            <div className="mb-3">our services</div>
            <div className="mb-3">our portofolio</div>
            <div className="mb-3">contacts</div>
          </div>
          <div className="ml-16 mt-14">
            <div
              className="capitalize text-blue-800 mb-3"
              style={{ fontSize: "24px" }}
            >
              Hubungi kami
            </div>
            <table className="mb-2">
              <tr>
                <td className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </td>
                <td>Email</td>
              </tr>
              <tr>
                <td></td>
                <td>satria-nusa.co.id</td>
              </tr>
            </table>
            <table>
              <tr>
                <td className="px-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                </td>
                <td className="capitalize">Satria access</td>
              </tr>
              <tr>
                <td></td>
                <td>08623121212121</td>
              </tr>
            </table>
          </div>
          <div className="absolute bottom-0 right-0 left-0 h-24 bg-blue-800 flex justify-center items-center text-white text-base">
            <div>
              Satria Nusa Enjinering © All rights reserved Copyrights 2023
            </div>
            <div className="flex space-x-2 ml-2 items-center">
              <Image
                unoptimized
                width={30}
                height={30}
                src="/twitter.svg"
                alt=""
              />
              <Image
                unoptimized
                width={30}
                height={30}
                src="/facebook.svg"
                alt=""
              />
              <Image
                unoptimized
                width={30}
                height={30}
                src="/linkedin.svg"
                alt=""
              />
              <Image
                unoptimized
                width={30}
                height={30}
                src="/youtube.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
