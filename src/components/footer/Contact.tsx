import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2  border-t-8 border-blue-800">
        <div className="pl-28 pr-52 bg-green-800 py-12">
          <div className="uppercase font-bold text-white mb-5 pts-40">
            Contact now
          </div>
          <div className="my-6 h-1 bg-white w-16"></div>
          <form>
            <div className="mb-9">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-9">
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-9">
              <input
                type="email"
                name="email"
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
        <div className="flex flex-col md:flex-row relative font-semibold">
          <div className="capitalize ml-16 mt-14">
            <div className=" text-blue-800 mb-3 pts-24">Quick Links</div>

            <div className="mb-3 hover:underline">
              <a href="/#impact">Our Impact</a>
            </div>
            <div className="mb-3 hover:underline">
              <a href="/#about">About</a>
            </div>
            <div className="mb-3 hover:underline">
              <a href="/#service">Our Services</a>
            </div>
            <div className="mb-3 hover:underline">
              <a href="/#portofolio">Our Portofolio</a>
            </div>
            <div className="mb-3 hover:underline">
              <a href="/#contact">Contact</a>
            </div>
          </div>
          <div className="ml-16 mt-14">
            <div className="capitalize text-blue-800 mb-3 pts-24">
              Hubungi kami
            </div>
            <div>
              <div className="flex">
                <div>
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
                </div>
                <div className="ml-3">Email</div>
              </div>
              <div className="flex">
                <div className="w-6 h-6"></div>
                <a
                  href="mailto:sales@satrianusa.group"
                  className="ml-3 font-bold"
                >
                  sales@satrianusa.group
                </a>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex">
                <div>
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
                </div>
                <div className="ml-3">Satria access</div>
              </div>
              <div className="flex">
                <div className="w-6 h-6"></div>
                <a
                  href="https://api.whatsapp.com/send?phone=081534617975"
                  target="__blank"
                  className="ml-3 font-bold"
                >
                  +6281534617975
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 left-0 h-24 bg-blue-800 flex justify-center items-center text-white">
            <div>
              Satria Nusa Enjinering © All rights reserved Copyrights 2023
            </div>
            <div className="flex space-x-2 ml-2 items-center">
              {/* <Image
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
              /> */}
              <a
                href="https://www.linkedin.com/company/satrianusaenjinering/"
                target="__blank"
                className="hover:text-gray-400"
              >
                <Image
                  unoptimized
                  width={30}
                  height={30}
                  src="/linkedin.svg"
                  alt=""
                />
              </a>
              <a href="https://www.youtube.com/channel/UCN7PlA7IMadLYzOWtnzmAOg">
                <Image
                  unoptimized
                  width={30}
                  height={30}
                  src="/youtube.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
